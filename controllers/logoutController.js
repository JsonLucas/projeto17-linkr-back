import { deleteSession } from "../database/queries/delete/sessions.js";

const logoutController = async (req, res) => {
    try{
        const { userId, token } = res.locals;
        const logout = await deleteSession(token, userId);
        if(logout.rowCount > 0){
            res.sendStatus(204);
            return;
        }
        res.sendStatus(400);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default logoutController;
