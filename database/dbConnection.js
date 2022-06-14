import pg from 'pg';
import { dbName, dbPort, dbUrl, host, password, username } from '../utils/env-config.js';

const { Pool } = pg;
const dbConnection = new Pool({
    host,
    password,
    user: username,
    connectionString: dbUrl,
    port: dbPort,
    database: dbName
});

export default dbConnection;
