import { AppError } from "../../errors/appError";

export const verifyCategoryIdMiddleware =
  (schema) => async (req, res, next) => {
    let paramsId;
    if (req.params.category_id) {
      paramsId = req.params.category_id;
    } else {
      paramsId = req.params.id;
    }

    try {
      const verifiedId = await schema.validate(
        { id: parseInt(paramsId) },
        {
          stripUnknown: true,
          abortEarly: false,
        }
      );

      req.categoryId = verifiedId.id;

      return next();
    } catch (error) {
      throw new AppError("ID not valid!", 404);
    }
  };
