import { Router } from "express";
import {
  actualizeProductController,
  createProductController,
  deleteProductController,
  getProductInfosController,
  listProductsController,
  listProductsfromCategoryController,
} from "../controllers/product.controller";
import { verifyCategoryIdMiddleware } from "../middlewares/Category/verifyCategoryId.middleware";
import { verifyIdExistsMiddleware } from "../middlewares/Category/verifyIdExists.middleware";
import { verifyProductBodyMiddleware } from "../middlewares/Product/verifyBody.middleware";
import { verifyIdIsValidMiddleware } from "../middlewares/Product/verifyIdIsValid.middleware";
import { verifyProductExistsMiddlewrare } from "../middlewares/Product/verifyProduct.middleware";
import { verifyProductIdExistsMiddleware } from "../middlewares/Product/verifyProductId.middleware";
import { categoryIdValidate } from "../serializers/categories.serialize";
import {
  actualizeBodyValidate,
  productBodyValidate,
  productIdValidate,
} from "../serializers/products.serialize";

const productRoutes = Router();

productRoutes.post(
  "",
  verifyProductBodyMiddleware(productBodyValidate),
  verifyProductExistsMiddlewrare,
  createProductController
);

productRoutes.get("", listProductsController);

productRoutes.get(
  "/:id",
  verifyIdIsValidMiddleware(productIdValidate),
  verifyProductIdExistsMiddleware,
  getProductInfosController
);

productRoutes.patch(
  "/:id",
  verifyIdIsValidMiddleware(productIdValidate),
  verifyProductIdExistsMiddleware,
  verifyProductBodyMiddleware(actualizeBodyValidate),
  actualizeProductController
);

productRoutes.get(
  "/category/:category_id",
  verifyCategoryIdMiddleware(categoryIdValidate),
  verifyIdExistsMiddleware,
  listProductsfromCategoryController
);

productRoutes.delete(
  "/:id",
  verifyIdIsValidMiddleware(productIdValidate),
  verifyProductIdExistsMiddleware,
  deleteProductController
);

export default productRoutes;
