import database from "../database";

export const getProductInfosService = async (itemId) => {
  const queryResponse = await database.query(
    `
      SELECT * FROM products WHERE id = $1;
    `,
    [itemId]
  );

  const item = queryResponse.rows[0];

  return item;
};
