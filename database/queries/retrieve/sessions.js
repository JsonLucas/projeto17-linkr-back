import dbConnection from '../../dbConnection.js';

const getUserSession = async (token) => {
    const sql = `SELECT * FROM sessions WHERE token=$1`;
    const query = await dbConnection.query(sql, [token]);
    const { rowCount, rows } = query;
    return { rowCount, rows }; 
}

export default getUserSession;