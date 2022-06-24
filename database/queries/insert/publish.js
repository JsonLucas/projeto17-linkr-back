import dbConnection from "../../dbConnection.js";

const postPublish = async (link, userId, commenter, tittle, image, icon, description) => {
    let create = undefined;
    if(commenter){
        if (!tittle && image){
            const sql = `INSERT INTO posts (link, "idUser", commenter, tittle, image, description) VALUES ($1, $2, $3, $4, $5, $6)`;
            create = await dbConnection.query(sql, [link, userId, commenter, link, image, description]);
        } else if (!tittle && !image){
            const sql = `INSERT INTO posts (link, "idUser", commenter, tittle, image, description) VALUES ($1, $2, $3, $4, $5, $6)`;
            create = await dbConnection.query(sql, [link, userId, commenter, link, icon, description]);
        } else if (image){
            const sql = `INSERT INTO posts (link, "idUser", commenter, tittle, image, description) VALUES ($1, $2, $3, $4, $5, $6)`;
            create = await dbConnection.query(sql, [link, userId, commenter, tittle, image, description]);
        } else {
            const sql = `INSERT INTO posts (link, "idUser", commenter, tittle, image, description) VALUES ($1, $2, $3, $4, $5, $6)`;
            create = await dbConnection.query(sql, [link, userId, commenter, tittle, icon, description]);
        }
    } else {
        if (!tittle && image){
            const sql = `INSERT INTO posts (link, "idUser", tittle, image, description) VALUES ($1, $2, $3, $4, $5)`;
            create = await dbConnection.query(sql, [link, userId, link, image, description]);
        } else if (!tittle && !image){
            const sql = `INSERT INTO posts (link, "idUser", tittle, image, description) VALUES ($1, $2, $3, $4, $5)`;
            create = await dbConnection.query(sql, [link, userId, link, icon, description]);
        } else if (image){
            const sql = `INSERT INTO posts (link, "idUser", tittle, image, description) VALUES ($1, $2, $3, $4, $5)`;
            create = await dbConnection.query(sql, [link, userId, tittle, image, description]);
        } else {
            const sql = `INSERT INTO posts (link, "idUser", tittle, image, description) VALUES ($1, $2, $3, $4, $5)`;
            create = await dbConnection.query(sql, [link, userId, tittle, icon, description]);
        }
    }
    return create;
}

export default postPublish;