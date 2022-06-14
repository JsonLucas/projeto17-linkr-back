import { loginSchema, signUpSchema } from "./validationSchemas.js";

export const validateLogin = (body) => {
    const validation = loginSchema.validate(body); 
    if(validation.error){
        return { status: false, error: validation.error.details };
    }
    return { status: true };
}

export const validateSignUp = (body) => {
    const validation = signUpSchema.validate(body); 
    if(validation.error){
        return { status: false, error: validation.error.details };
    }
    return { status: true };
}