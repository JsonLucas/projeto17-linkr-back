import { getUserById } from "../database/queries/retrieve/users.js";

async function getUser(req, res){
    try{
        const { userId } = res.locals;
        const queryUser = await getUserById(userId);
        if(queryUser.rowCount > 0){
            const { id, name, picture } = queryUser.rows[0];
            res.status(200).send({ id, name, picture });
            return;
        }
        res.sendStatus(404);
    } catch (e) {
        console.log(e);
        res.status(500).send('Não foi possível se conectar com o BD');
    }
}

export default getUser;
