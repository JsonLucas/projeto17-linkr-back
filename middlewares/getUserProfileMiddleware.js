import { getUserSession } from "../database/queries/retrieve/sessions.js";

const getUserProfileMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;
    const { id } = req.params;
    try{
        const sessionUser = await getUserSession(authorization);
        if(sessionUser.rowCount > 0){
            res.locals.userId = id;
            next();
            return;
        }
        res.sendStatus(401);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default getUserProfileMiddleware;
