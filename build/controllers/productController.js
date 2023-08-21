"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductsofSnacksCategoryController = exports.getProductsofChaiAndCoffeeCategoryController = void 0;
const productServices_1 = require("../services/productServices");
const getProductsofChaiAndCoffeeCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category1 = req.params.category1;
    const category2 = req.params.category2;
    const data = yield (0, productServices_1.getProductsofChaiAndCoffeeCategory)(category1, category2);
    res.json(data);
});
exports.getProductsofChaiAndCoffeeCategoryController = getProductsofChaiAndCoffeeCategoryController;
const getProductsofSnacksCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category1 = req.params.category1;
    const data = yield (0, productServices_1.getProductsofSnacksCategory)(category1);
    res.json(data);
});
exports.getProductsofSnacksCategoryController = getProductsofSnacksCategoryController;
