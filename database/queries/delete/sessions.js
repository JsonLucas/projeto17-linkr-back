import dbConnection from "../../dbConnection.js";

export const deleteSession = async (token, userId) => {
    const sql = `DELETE FROM sessions WHERE token=$1 AND "idUser"=$2`;
    const logout = await dbConnection.query(sql, [token, userId]);
    const { rowCount } = logout;
    return { rowCount };
}