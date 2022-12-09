import { Router } from "express";
import {
  actualizeCategoryController,
  createCategoryController,
  deleteCategoryController,
  getCategoryInfosController,
  listCategoriesController,
} from "../controllers/category.controller";
import { verifyCategoryBodyMiddleware } from "../middlewares/Category/verifyBody.middleware";
import { verifyCategoryExistsMiddlewrare } from "../middlewares/Category/verifyCategory.middleware";
import { verifyCategoryIdMiddleware } from "../middlewares/Category/verifyCategoryId.middleware";
import { verifyIdExistsMiddleware } from "../middlewares/Category/verifyIdExists.middleware";
import {
  bodyValidate,
  categoryIdValidate,
} from "../serializers/categories.serialize";

const categoryRoutes = Router();

categoryRoutes.post(
  "",
  verifyCategoryBodyMiddleware(bodyValidate),
  verifyCategoryExistsMiddlewrare,
  createCategoryController
);

categoryRoutes.get("", listCategoriesController);

categoryRoutes.get(
  "/:id",
  verifyCategoryIdMiddleware(categoryIdValidate),
  verifyIdExistsMiddleware,
  getCategoryInfosController
);

categoryRoutes.patch(
  "/:id",
  verifyCategoryIdMiddleware(categoryIdValidate),
  verifyIdExistsMiddleware,
  verifyCategoryBodyMiddleware(bodyValidate),
  actualizeCategoryController
);

categoryRoutes.delete(
  "/:id",
  verifyCategoryIdMiddleware(categoryIdValidate),
  verifyIdExistsMiddleware,
  deleteCategoryController
);

export default categoryRoutes;
