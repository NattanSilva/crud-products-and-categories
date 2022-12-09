import { AppError } from "../../errors/appError";

export const verifyCategoryBodyMiddleware =
  (schema) => async (req, res, next) => {
    const { body } = req;

    try {
      const validateUserData = await schema.validate(body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.validatedBody = validateUserData;

      return next();
    } catch (error) {
      throw new AppError(error.message);
    }
  };
