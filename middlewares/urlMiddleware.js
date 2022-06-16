import { validateUrl } from "../utils/validationFunctions.js";

const urlMiddleware = (req, res, next) => {
    const {body} = req;
    const validation = validateUrl(body);
    if(validation.error){
        return res.status(422).send(validation.error);
    }
    next();
}

export default urlMiddleware;