import { AppError } from "../../errors/appError";

export const verifyIdIsValidMiddleware = (schema) => async (req, res, next) => {
  const paramsId = req.params.id;
  try {
    const validateId = await schema.validate(
      { id: paramsId },
      {
        stripUnknown: true,
        abortEarly: false,
      }
    );

    req.validId = validateId.id;

    return next();
  } catch (error) {
    throw new AppError("Id is not valid", 404);
  }
};
