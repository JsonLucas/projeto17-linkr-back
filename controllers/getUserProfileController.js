import { getUserById } from "../database/queries/retrieve/users.js";

const getUserProfileController = async (req, res) => {
    const { userId } = res.locals;
    try{
        const userPosts = await getUserById(userId);
        if(userPosts.rowCount > 0){
            const { rows } = userPosts;
            res.status(200).send(rows);
            return; 
        }
        res.sendStatus(404);
    }catch(e){
        console.log(e.message);
        res.sendStatus(500);
    }
}

export default getUserProfileController;
