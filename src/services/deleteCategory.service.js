import database from "../database";

export const deleteCategoryService = async (categoryId) => {
  const queryResponse = await database.query(
    `
     DELETE FROM categories cat WHERE cat.id = $1;
    `,
    [categoryId]
  );
};
