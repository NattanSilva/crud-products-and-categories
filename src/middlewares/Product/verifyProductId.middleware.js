import database from "../../database";
import { AppError } from "../../errors/appError";

export const verifyProductIdExistsMiddleware = async (req, res, next) => {
  const paramsId = req.params.id;

  const queryResponse = await database.query(
    `
      SELECT * FROM products WHERE id = $1;
    `,
    [paramsId]
  );

  if (queryResponse.rowCount === 0) {
    throw new AppError("Product not found!", 404);
  }

  return next();
};
