import { AppError } from "../../errors/appError";

export const verifyProductBodyMiddleware =
  (schema) => async (req, res, next) => {
    const { body } = req;

    if (!body) {
      throw new AppError("Body is required");
    }

    try {
      const validateUserData = await schema.validate(body, {
        stripUnknown: true,
        abortEarly: false,
      });

      req.validatedBody = validateUserData;

      return next();
    } catch (error) {
      return res.status(400).json({ message: error.errors });
    }
  };
