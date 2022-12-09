import database from "../database";
import { AppError } from "../errors/appError";
import { returnedBody } from "../serializers/categories.serialize";

export const actualizeCategoryService = async (categoryId, newData) => {
  try {
    const queryResponse = await database.query(
      `
        UPDATE categories SET "name" = $1 WHERE id = $2 RETURNING *;
      `,
      [newData.name, categoryId]
    );

    const data = await returnedBody.validate(queryResponse.rows[0], {
      stripUnknown: true,
    });

    return data;
  } catch (error) {
    throw new AppError(error);
  }
};
