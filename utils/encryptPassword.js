import bcrypt from 'bcrypt';

export const encryptPassword = (password) => {
    const encryption = bcrypt.hash(password, 10);
    return encryption;
}

export const decryptPassword = (password, hashPassword) => {
    const comparation = bcrypt.compare(password, hashPassword);
    return comparation;
}