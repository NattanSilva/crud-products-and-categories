import database from "../../database";
import { AppError } from "../../errors/appError";

export const verifyCategoryExistsMiddlewrare = async (req, res, next) => {
  const queryResponse = await database.query(
    `
      SELECT * FROM categories WHERE "name" = $1;
    `,
    [req.body.name]
  );

  if (queryResponse.rowCount > 0) {
    throw new AppError("Category has already regitred", 400);
  }

  return next();
};
