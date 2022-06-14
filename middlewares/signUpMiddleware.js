import { validateSignUp } from "../utils/validationFunctions.js";

const signUpMiddleware = (req, res, next) => {
    const { body } = req;
    const validation = validateSignUp(body); 
    if(validation.status){
        res.locals.body = body;
        next();
        return;
    }
    res.status(422).send(validation.error);
}

export default signUpMiddleware;