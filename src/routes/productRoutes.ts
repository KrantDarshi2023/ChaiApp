import express from "express";
import {
  getPriceOfProductByProductIdController,
  getProductsByNameController,
  getProductsofChaiAndCoffeeCategoryController,
  getProductsofSnacksCategoryController,
} from "../controllers/productController";

var productRouter = express.Router();

productRouter.get(
  "/byCategory/:category1/:category2",
  getProductsofChaiAndCoffeeCategoryController
);
productRouter.get(
  "/byCategory/:category1",
  getProductsofSnacksCategoryController
);
productRouter.get("/byName/:name", getProductsByNameController);
productRouter.get("/price/:productId", getPriceOfProductByProductIdController);
export default productRouter;
