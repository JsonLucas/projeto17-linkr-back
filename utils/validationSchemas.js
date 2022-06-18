import joi from 'joi';

export const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
});

export const signUpSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
    username: joi.string().required(),
    pictureUrl: joi.string().uri().required()
});

export const urlSchema = joi.object({
    link: joi.string().regex(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required(),
    commenter: joi.string().allow('')
});