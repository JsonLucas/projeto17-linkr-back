import dbConnection from "../../dbConnection.js";

const postPublish = async (link, userId, commenter) => {
    if(commenter){
        const sql = `INSERT INTO posts (link, "idUser", commenter) VALUES ($1, $2, $3)`;
        await dbConnection.query(sql, [link, userId, commenter]);
    } else {
        const sql = `INSERT INTO posts (link, "idUser") VALUES ($1, $2)`;
        await dbConnection.query(sql, [link, userId]);
    }
}

export default postPublish;