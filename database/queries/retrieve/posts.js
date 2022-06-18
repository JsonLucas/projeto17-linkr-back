import dbConnection from "../../dbConnection.js";

export const selectPosts = async () => {
    const sql = `SELECT p.link, p.commenter, u.name, u.picture, u.id FROM posts p JOIN users u ON u.id = p."idUser" ORDER BY p."createDate" DESC`
    const select = await dbConnection.query(sql);
    const { rows } = select;
    return rows
}

export const getPostsByUserId = async (userId) => {
    const sql = `SELECT * FROM posts JOIN users ON posts."idUser"="users"."id" WHERE posts."idUser"=$1`;
    const query = await dbConnection.query(sql, [userId]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}
