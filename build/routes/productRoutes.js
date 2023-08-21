"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
var productRouter = express_1.default.Router();
productRouter.get("/byCategory/:category1/:category2", productController_1.getProductsofChaiAndCoffeeCategoryController);
productRouter.get("/byCategory/:category1", productController_1.getProductsofSnacksCategoryController);
exports.default = productRouter;
