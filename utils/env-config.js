import 'dotenv/config.js';

//database
export const dbUrl = process.env.DATABASE_URL;
export const dbName = process.env.DATABSE_NAME;
export const dbPort = process.env.DATABASE_PORT;
export const host = process.env.HOST;
export const username = process.env.USERNAME;
export const password = process.env.PASSWORD;

//server
export const port = process.env.PORT;