import database from "../../database";
import { AppError } from "../../errors/appError";

export const verifyIdExistsMiddleware = async (req, res, next) => {
  const queryResponse = await database.query(
    `
      SELECT * FROM categories WHERE id = $1;
    `,
    [req.categoryId]
  );

  if (queryResponse.rowCount === 0) {
    throw new AppError("ID not found!", 404);
  }

  return next();
};
