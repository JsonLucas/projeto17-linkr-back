import dbConnection from "../../dbConnection.js";

export const queryUserLogin = async (body) => {
    const { email } = body;
    const sql = `SELECT * FROM users WHERE email=$1`;
    const query = await dbConnection.query(sql, [email]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}

export const getUserById = async (userId) => {
    const sql = `SELECT * FROM users WHERE id=$1`;
    const query = await dbConnection.query(sql, [userId]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}

export const getUsersByQuery = async (queryString) => {
    const sql = `SELECT * FROM users WHERE name LIKE '%${queryString}%'`;
    const query = await dbConnection.query(sql);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}
