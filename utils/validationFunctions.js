import { loginSchema, signUpSchema, urlSchema } from "./validationSchemas.js";

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

export const validateUrl = (body) => {
    const validation = urlSchema.validate(body);
    if(validation.error){
        return { status: false, error: validation.error.details };
    }
    return { status: true };
}