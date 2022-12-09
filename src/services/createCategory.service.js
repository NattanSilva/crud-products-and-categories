import database from "../database";
import { returnedBody } from "../serializers/categories.serialize";

export const createCategoryService = async (body) => {
  const queryResponse = await database.query(
    `
      INSERT INTO 
        categories(name)
      VALUES
        ($1)
      RETURNING *;
      `,
    [body.name]
  );

  const userData = await returnedBody.validate(queryResponse.rows[0], {
    stripUnknown: false,
  });

  return userData;
};
