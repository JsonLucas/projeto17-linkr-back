import postPublish from "./../database/queries/insert/publish.js";
import { selectPosts } from "../database/queries/retrieve/posts.js";

export async function publishController(req, res){
    const {user} = res.locals;
    const {link, commenter} = req.body;
    try{
        const insertionPost = await postPublish(link, user.rows[0].id, commenter);
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

export async function getUser(req, res){
    const {user} = res.locals;
    const { id, name, picture } = user.rows[0];
    try{
        return res.status(200).send({ id, name, picture });
    } catch (e) {
        console.log(e);
        return res.status(500).send('Não foi possível se conectar com o BD');
    }
}