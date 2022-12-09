import database from "../database";
import { returnedBody } from "../serializers/categories.serialize";

export const getCategoryInfosService = async (categoryId) => {
  const queryResponse = await database.query(
    `
      SELECT * FROM categories WHERE id = $1;
    `,
    [categoryId]
  );

  const validatedBody = returnedBody.validate(queryResponse.rows[0], {
    stripUnknown: true,
  });

  return validatedBody;
};
