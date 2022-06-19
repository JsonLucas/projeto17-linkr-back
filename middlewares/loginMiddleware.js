import { verificateActiveSession } from "../database/queries/retrieve/sessions.js";
import { validateLogin } from "../utils/validationFunctions.js";

const loginMiddleware = async (req, res, next) => {
    const { body } = req;
    const verificateSession = await verificateActiveSession(body.token);
    if(verificateSession.rowCount > 0){
        const { token } = verificateSession.rows[0];
        res.status(200).send({ token });
        return;
    }
    const validation = validateLogin(body);
    if(validation.status){
        res.locals.body = body;
        next();
        return;
    }
    res.status(422).send(validation.error);
}

export default loginMiddleware;