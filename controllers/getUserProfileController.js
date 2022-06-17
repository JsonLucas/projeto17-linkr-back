import { getPostsByUserId } from "../database/queries/retrieve/posts.js";

const getUserProfileController = async (req, res) => {
    const { userId } = res.locals;
    try{
        const userPosts = await getPostsByUserId(userId);
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
