import database from "../database";
import { returnedBodyValidate } from "../serializers/products.serialize";

export const createProductService = async (body) => {
  const queryResponse = await database.query(
    `
      INSERT INTO 
	      products("name", price, category_id) 
      VALUES 
	      ($1, $2, $3)
      RETURNING *;
    `,
    [body.name, body.price, body.category_id]
  );

  const product = await returnedBodyValidate.validate(queryResponse.rows[0], {
    stripUnknown: true,
  });

  return product;
};
