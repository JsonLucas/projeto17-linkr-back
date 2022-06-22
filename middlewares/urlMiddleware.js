import { validateUrl } from "../utils/validationFunctions.js";

const urlMiddleware = (req, res, next) => {
    const body = req.body;
    const validation = validateUrl(body);
    if(validation.status){
        next();
        return;
    }
    res.status(422).send(validation.error);
}

export default urlMiddleware;
