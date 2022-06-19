import { verificateActiveSession } from "../database/queries/retrieve/sessions.js";
import { getUserById } from "../database/queries/retrieve/users.js";

const verificatePreviousSessionMiddleware = async (req, res, next) => {
    const { body } = req;
    if(body.token){
        const verificateSession = await verificateActiveSession(body.token);
        if(verificateSession.rowCount > 0){
            const { token, idUser } = verificateSession.rows[0];
            const userInfo = await getUserById(idUser);
            if(userInfo.rowCount > 0){
                const { name, picture } = userInfo.rows[0];
                res.status(200).send({ token, name, picture });
                return;
            }
        }
    }
    next();
}

export default verificatePreviousSessionMiddleware;