import { selectPosts } from "../database/queries/retrieve/posts.js";

async function getPosts(req, res){
    try {
        const posts = await selectPosts();
        res.status(200).send(posts);
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Não foi possível se conectar com o BD');
    }
}

export default getPosts;