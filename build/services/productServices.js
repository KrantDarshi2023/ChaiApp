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
exports.getProductsofSnacksCategory = exports.getProductsofChaiAndCoffeeCategory = void 0;
const mySqlConnection_1 = require("../database/mySqlConnection");
const getProductsofChaiAndCoffeeCategory = (category1, category2) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield mySqlConnection_1.pool.query(`select * from products where categories='${category1}' or categories='${category2}'`);
    if (Array.isArray(blog[0]) && blog[0].length === 0) {
        return "No record found";
    }
    else {
        return blog[0];
    }
});
exports.getProductsofChaiAndCoffeeCategory = getProductsofChaiAndCoffeeCategory;
const getProductsofSnacksCategory = (category1) => __awaiter(void 0, void 0, void 0, function* () {
    const blog = yield mySqlConnection_1.pool.query(`select * from products where categories='${category1}''`);
    if (Array.isArray(blog[0]) && blog[0].length === 0) {
        return "No record found";
    }
    else {
        return blog[0];
    }
});
exports.getProductsofSnacksCategory = getProductsofSnacksCategory;
