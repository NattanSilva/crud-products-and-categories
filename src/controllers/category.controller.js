import { actualizeCategoryService } from "../services/actualizeCategory.service";
import { createCategoryService } from "../services/createCategory.service";
import { deleteCategoryService } from "../services/deleteCategory.service";
import { getCategoryInfosService } from "../services/getCategoryInfos.service";
import { listCategoriesService } from "../services/listCategories.service";

export const createCategoryController = async (req, res) => {
  const data = await createCategoryService(req.validatedBody);

  return res.status(201).json(data);
};

export const listCategoriesController = async (req, res) => {
  const list = await listCategoriesService();

  return res.status(200).json(list);
};

export const getCategoryInfosController = async (req, res) => {
  const itemsList = await getCategoryInfosService(req.categoryId);

  return res.status(200).json(itemsList);
};

export const actualizeCategoryController = async (req, res) => {
  const data = await actualizeCategoryService(req.categoryId, req.body);

  return res.status(200).json(data);
};

export const deleteCategoryController = async (req, res) => {
  await deleteCategoryService(req.categoryId);

  return res.status(204).json({});
};
