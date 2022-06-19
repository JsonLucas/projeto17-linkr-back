import getUserSession from "../database/queries/retrieve/sessions.js";
import { getUserById } from "../database/queries/retrieve/users.js";

export async function authMiddleware(req, res, next){
    const { authorization } = req.headers;
    if (authorization) {
        const session = await getUserSession(authorization);
        if (session.rowCount > 0) {
            const { idUser } = session.rows[0];
            const user = await getUserById(idUser);
            if(user.rowCount > 0){
                res.locals.user = user;
                next();
                return;
            }
            res.sendStatus(401);
            return;
        }
    }
    return res.sendStatus(422);    
}