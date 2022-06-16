import postPublish from "./../database/queries/insert/publish.js";
import selectPosts from "../database/queries/select/selectPosts.js";

export async function publishController(req, res){
    const {user} = res.locals;
    const {link, commenter} = req.body;
    try{
        await postPublish(link, user.rows[0].id, commenter);
        return res.sendStatus(201);
    } catch (e) {
        console.log(e);
        return res.status(500).send('Não foi possível se conectar com o BD');
    }
}

export async function getPosts(req, res){
    try {
        const posts = await selectPosts();
        return res.status(200).send(posts);
    } catch (e) {
        console.log(e);
        return res.status(500).send('Não foi possível se conectar com o BD');
    }

}