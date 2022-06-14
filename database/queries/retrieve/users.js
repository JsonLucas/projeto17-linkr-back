import dbConnection from "../../dbConnection.js";

export const queryUserLogin = async (body) => {
    const { email } = body;
    const sql = `SELECT * FROM users WHERE email=$1`;
    const query = await dbConnection.query(sql, [email]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}
