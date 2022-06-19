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
            const { name, picture } = rows[0];
            const passwordComparation = await decryptPassword(password, rows[0].password);
            if(passwordComparation){
                const token = tokenGeneration(email).split('.');
                const authorization = { token: `Bearer ${token[1]}` };
                await setSession(authorization.token, rows[0].id);
                res.status(200).send({token: authorization, name, picture});
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