import dbConnection from "../../dbConnection.js";

const postPublish = async (link, userId, commenter) => {
    let create = undefined;
    if(commenter){
        const sql = `INSERT INTO posts (link, "idUser", commenter) VALUES ($1, $2, $3)`;
        create = await dbConnection.query(sql, [link, userId, commenter]);
    } else {
        const sql = `INSERT INTO posts (link, "idUser") VALUES ($1, $2)`;
        create = await dbConnection.query(sql, [link, userId]);
    }
    return create;
}

export default postPublish;