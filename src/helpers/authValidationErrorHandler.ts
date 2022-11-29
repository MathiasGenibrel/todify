import { ValidationError } from 'joi';
import { SchemaValidationContext } from '../repository/auth/auth.schema';

export const authValidationErrorHandler = (error: ValidationError) => {
  return error.details.map(detailError => {
    if (!detailError.context) {
      return;
    }

    // Not sure about that 😬
    switch (detailError.context.key as unknown as SchemaValidationContext) {
      case SchemaValidationContext.EMAIL:
        return {
          ...detailError,
          message:
            'The email you entered is incorrect, Correct email looks like "example@domain.com"',
        };

      case SchemaValidationContext.PASSWORD:
        return {
          ...detailError,
          message:
            'The password you entered is incorrect, Password need (Uppercase, lowercase, number)',
        };

      case SchemaValidationContext.CONFIRM_PASSWORD:
        return {
          ...detailError,
          message:
            'The confirm password you entered is incorrect, Confirm Password need (Uppercase, lowercase, number)',
        };

      default:
        return {
          ...detailError,
          message: 'An error appear with the schema validation',
        };
    }
  });
};
