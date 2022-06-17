import dbConnection from "../../dbConnection.js";

const selectPosts = async () => {
    const sql = `SELECT p.link, p.commenter,u.name, u.picture FROM posts p JOIN users u ON u.id = p."idUser" ORDER BY p."createDate" DESC`
    const select = await dbConnection.query(sql);
    const { rows } = select;
    return rows
}

export default selectPosts;