import 'fast-text-encoding'; // For Joi validation
import Joi from 'joi';

import { UserData } from './authRepository';

// Enum used to schema data key
export enum SchemaValidationContext {
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
}

// Schema to validate data
export const loginSchema = Joi.object<UserData>({
  [SchemaValidationContext.EMAIL]: Joi.string().email({
    tlds: { allow: false },
  }),
  [SchemaValidationContext.PASSWORD]: Joi.string().pattern(
    new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
  ),
});

export const registerSchema = Joi.object<UserData>({
  [SchemaValidationContext.EMAIL]: Joi.string().email({
    tlds: { allow: false },
  }),
  [SchemaValidationContext.PASSWORD]: Joi.string().pattern(
    new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'),
  ),
  [SchemaValidationContext.CONFIRM_PASSWORD]: Joi.ref('password'),
});
