import { getUserById } from "../database/queries/retrieve/users.js";
import postPublish from "./../database/queries/insert/publish.js";

async function publishController(req, res){
    const { userId, body } = res.locals;
    const { link, commenter } = body;
    try{
        const user = await getUserById(userId);
        if(user.rowCount > 0){
            const insertionPost = await postPublish(link, user.rows[0].id, commenter);
            if(insertionPost.rowCount > 0){
                res.sendStatus(201);
                return;
            }
            res.sendStatus(400);
            return;
        }
        res.sendStatus(401);
    } catch (e) {
        console.log(e);
        res.status(500).send('Não foi possível se conectar com o BD');
    }
}

export default publishController;
