import dbConnection from "../../dbConnection.js";

export const createUser = async (body) => {
    const { email, encryptedPassword, username, pictureUrl } = body;
    const sql = `INSERT INTO users (name, email, password, picture) VALUES ($1, $2, $3, $4)`;
    const insert = await dbConnection.query(sql, [username, email, encryptedPassword, pictureUrl]);
    const { rowCount, rows } = insert;
    return { rowCount, rows }; 
}
