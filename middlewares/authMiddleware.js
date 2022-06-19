import { getUserSession } from "../database/queries/retrieve/sessions.js";

async function authMiddleware(req, res, next) {
    const { body } = req;
    const { authorization } = req.headers;
    const session = await getUserSession(authorization);
    if (session.rowCount > 0) {
        const { idUser } = session.rows[0];
        res.locals.userId = idUser;
        res.locals.body = body;
        next();
        return;
    }
    res.sendStatus(401);
}

export default authMiddleware;
