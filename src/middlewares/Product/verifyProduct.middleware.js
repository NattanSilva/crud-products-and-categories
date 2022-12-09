import database from "../../database";
import { AppError } from "../../errors/appError";

export const verifyProductExistsMiddlewrare = async (req, res, next) => {
  const queryResponse = await database.query(
    `
      SELECT "name" FROM products pro WHERE pro."name" = $1;
    `,
    [req.body.name]
  );

  const category = queryResponse.rows[0];

  if (category) {
    throw new AppError("Product has already registred", 409);
  }

  return next();
};
