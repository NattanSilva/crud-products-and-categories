import { actualizeProductService } from "../services/actualizeProduct.service";
import { createProductService } from "../services/createProduct.service";
import { deleteProductService } from "../services/deleteProduct.service";
import { getProductInfosService } from "../services/getProductInfos.service";
import { listProductsService } from "../services/listProducts.service";
import { listProductsfromCategoryService } from "../services/listProductsfromCategory.service";

export const createProductController = async (req, res) => {
  const data = await createProductService(req.validatedBody);

  return res.status(201).json(data);
};

export const listProductsController = async (req, res) => {
  const list = await listProductsService();

  return res.status(200).json(list);
};

export const getProductInfosController = async (req, res) => {
  const item = await getProductInfosService(req.validId);

  return res.status(200).json(item);
};

export const actualizeProductController = async (req, res) => {
  const newData = await actualizeProductService(req.validId, req.validatedBody);

  return res.status(200).json(newData);
};

export const listProductsfromCategoryController = async (req, res) => {
  const list = await listProductsfromCategoryService(req.categoryId);

  return res.status(200).json(list);
};

export const deleteProductController = async (req, res) => {
  await deleteProductService(req.validId);

  return res.status(204).json({});
};
