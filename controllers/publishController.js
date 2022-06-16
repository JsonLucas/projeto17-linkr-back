import postPublish from "./../database/queries/insert/publish.js";

export async function publishController(req, res){
    const {user} = res.locals;
    const newPost = req.body;
    console.log(newPost);
    try{
        await postPublish();
    } catch (e) {
        console.log(e);
        return res.status(500).send('Não foi possível se conectar com o BD');
    }
}