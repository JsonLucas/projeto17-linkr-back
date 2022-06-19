import { getUsersByQuery } from "../database/queries/retrieve/users.js";

const queryUsersController = async (req, res) => {
    const { query } = req.params;
    try{
        const queryUsers = await getUsersByQuery(query);
        if(queryUsers.rowCount > 0){
            res.status(200).send(queryUsers.rows);
            return;
        }
        res.status(404).send(`"${query}" was not found.`);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default queryUsersController;