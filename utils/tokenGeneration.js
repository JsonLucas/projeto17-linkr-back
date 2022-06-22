import jwt from "jsonwebtoken"
import dotenv from "dotenv";

export const tokenGeneration = (id) => {
    dotenv.config();
    const data = { id: id };
    const secretKey = process.env.JWT_SECRET;
    const config = { expiresIn: 60*60*24*30 }
    const token = jwt.sign(data, secretKey, config);
    return token;
}