import database from "../database";

export const listProductsfromCategoryService = async (categoryId) => {
  const queryResponse = await database.query(
    `
      SELECT pro."name",pro.price,cat."name" as category FROM products pro JOIN categories cat ON cat.id = $1;
    `,
    [categoryId]
  );

  const list = queryResponse.rows;

  return list;
};
