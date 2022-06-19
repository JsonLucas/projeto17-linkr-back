import { validateLogin } from "../utils/validationFunctions.js";

const loginMiddleware = async (req, res, next) => {
    const { body } = req;
    const validation = validateLogin(body);
    if(validation.status){
        res.locals.body = body;
        next();
        return;
    }
    res.status(422).send(validation.error);
}

export default loginMiddleware;