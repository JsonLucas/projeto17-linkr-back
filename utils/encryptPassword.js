import bcrypt from 'bcrypt';

export const encryptPassword = async (password) => {
    const encryption = await bcrypt.hash(password, 10);
    return encryption;
}

export const decryptPassword = async (password, hashPassword) => {
    const comparation = await bcrypt.compare(password, hashPassword);
    return comparation;
}