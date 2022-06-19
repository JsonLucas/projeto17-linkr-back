import dbConnection from '../../dbConnection.js';

export const getUserSession = async (token) => {
    const sql = `SELECT * FROM sessions WHERE token=$1`;
    const query = await dbConnection.query(sql, [token]);
    const { rowCount, rows } = query;
    return { rowCount, rows }; 
}

export const verificateActiveSession = async (token) => {
    const sql = `SELECT * FROM sessions JOIN users ON sessions."idUser"="users"."id" WHERE sessions."token"=$1`;
    const query = await dbConnection.query(sql, [token]);
    const { rowCount, rows } = query;
    return { rowCount, rows };
}
