import { queryUserLogin } from "../database/queries/retrieve/users.js";
import { tokenGeneration } from "../utils/tokenGeneration.js";
import { decryptPassword } from "../utils/encryptPassword.js";
import setSession from "../database/queries/insert/sessions.js";

const loginController = async (req, res) => {
    const { body } = res.locals;
    try{
        const { email, password } = body;
        const queryUser = await queryUserLogin({ email });
        if(queryUser.rowCount > 0){
            const { rows } = queryUser;
            const { name, picture, id } = rows[0];
            const passwordComparation = await decryptPassword(password, rows[0].password);
            if(passwordComparation){
                const token = tokenGeneration(id);
                await setSession(token, rows[0].id);
                res.status(200).send({token, name, picture});
                return;
            }
            res.status(401).send('incorrect email or password');
            return;
        }
        res.sendStatus(404);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default loginController;