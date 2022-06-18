import dbConnection from "../../dbConnection.js";

const postPublish = async (link, userId, commenter) => {
    const sql = `INSERT INTO posts (link, "idUser", commenter) VALUES ($1, $2, $3)`;
    const post = await dbConnection.query(sql, [link, userId, commenter]);
    return post;
}

export default postPublish;