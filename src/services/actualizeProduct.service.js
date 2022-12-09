import database from "../database";
import { returnedBodyValidate } from "../serializers/products.serialize";

export const actualizeProductService = async (itemId, body) => {
  let query = "UPDATE products SET ";
  const keys = Object.keys(body);
  const values = Object.values(body);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += `WHERE id = \$${(keys.length += 1)} RETURNING * ;`;

  const queryResponse = await database.query(query, [...values, itemId]);

  const newData = await returnedBodyValidate.validate(queryResponse.rows[0], {
    stripUnknown: true,
  });

  return newData;
};
