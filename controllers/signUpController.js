import { createUser } from "../database/queries/insert/users.js";
import { encryptPassword } from "../utils/encryptPassword.js";

const signUpController = async (req, res) => {
    const { body } = res.locals;
    const { email, password, username, pictureUrl } = body;
    try{
        const encryptedPassword = await encryptPassword(password);
        await createUser({email, encryptedPassword, username, pictureUrl});
        res.sendStatus(201);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default signUpController;