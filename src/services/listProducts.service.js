import database from "../database";

export const listProductsService = async () => {
  const queryResponse = await database.query(
    `
      SELECT * FROM products;
    `
  );

  const list = queryResponse.rows;

  return list;
};
