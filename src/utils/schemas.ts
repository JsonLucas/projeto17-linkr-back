import joi from 'joi';

export const SignUpSchema = joi.object({
	nickname: joi.string().required(),
	email: joi.string().email().required(),
	password: joi.string().required(),
	confirmPassword: joi.ref('password'),
	picture: joi.string().uri().required()
});

export const LoginSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required()
});