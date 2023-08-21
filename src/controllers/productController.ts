import { Request, Response } from "express";
import {
  getPriceOfProductByProductId,
  getProductByName,
  getProductsofChaiAndCoffeeCategory,
  getProductsofSnacksCategory,
} from "../services/productServices";

const getProductsofChaiAndCoffeeCategoryController = async (
  req: Request,
  res: Response
) => {
  const category1: string = req.params.category1;
  const category2: string = req.params.category2;
  const data = await getProductsofChaiAndCoffeeCategory(category1, category2);
  res.json(data);
};
const getProductsofSnacksCategoryController = async (
  req: Request,
  res: Response
) => {
  const category1: string = req.params.category1;
  const data = await getProductsofSnacksCategory(category1);
  res.json(data);
};
const getProductsByNameController = async (req: Request, res: Response) => {
  const name: string = req.params.name;
  const data = await getProductByName(name);
  res.json(data);
};
const getPriceOfProductByProductIdController = async (
  req: Request,
  res: Response
) => {
  const productId: number = Number(req.params.productId);
  const data = await getPriceOfProductByProductId(productId);
  res.json(data);
};
export {
  getProductsofChaiAndCoffeeCategoryController,
  getProductsofSnacksCategoryController,
  getProductsByNameController,
  getPriceOfProductByProductIdController,
};
