import database from "../database";

export const deleteProductService = async (productId) => {
  const queryResponse = await database.query(
    `
     DELETE FROM products pr WHERE pr.id = $1;
    `,
    [productId]
  );
};
