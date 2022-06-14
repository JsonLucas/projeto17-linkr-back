import dbConnection from "../../dbConnection.js";

const setSession = async (token, userId) => {
    const sql = `INSERT INTO sessions (token, "idUser") VALUES ($1, $2)`;
    const insert = await dbConnection.query(sql, [token, userId]);
    const { rowCount, rows } = insert;
    return { rowCount, rows };
}

export default setSession;
