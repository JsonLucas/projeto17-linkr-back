import Joi from "joi"
import { IGenericObject } from "../entities/generic-object"

interface IValidator<S, O>{
	validate: (schema: S, payload: IGenericObject, options?: O) => Promise<void>
}

export class Validator implements IValidator<Joi.ObjectSchema, Joi.AsyncValidationOptions>{
	async validate(schema: Joi.ObjectSchema, payload: IGenericObject, options?: Joi.AsyncValidationOptions): Promise<void>{
		try{
			await schema.validateAsync(payload, options);
		}catch(e: any){
			console.log(e);
			throw { code: 422, error: e };
		}
	}
}