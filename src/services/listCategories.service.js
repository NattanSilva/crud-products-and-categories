import database from "../database";

export const listCategoriesService = async () => {
  const queryResponse = await database.query(
    `
      SELECT * FROM categories;
    `
  );

  const list = queryResponse.rows;

  return list;
};
