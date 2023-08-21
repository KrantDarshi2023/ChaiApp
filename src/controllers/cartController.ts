import { Request, Response } from "express";
import {
  EmptyCartByUserId,
  decreaseQuantityByProductId,
  getCartDetailsByUserId,
  getQuantityByUserIdAndproductId,
  increaseQuantityByProductId,
} from "../services/cartServices";

const increaseQuantityByProductIdController = async (
  req: Request,
  res: Response
) => {
  const productId: number = Number(req.params.productId);
  const userId: number = Number(req.params.userId);
  const data = await increaseQuantityByProductId(productId, userId);
  res.json(data);
};
const decreaseQuantityByProductIdController = async (
  req: Request,
  res: Response
) => {
  const productId: number | undefined = Number(req.params.productId);
  const userId: number = Number(req.params.userId);
  const data = await decreaseQuantityByProductId(productId, userId);
  res.json(data);
};
const getQuantityByUserIdAndproductIdController = async (
  req: Request,
  res: Response
) => {
  const productId: number = Number(req.params.productId);
  const userId: number = Number(req.params.userId);
  const data = await getQuantityByUserIdAndproductId(productId, userId);
  res.json(data);
};
const getCartDetailsByUserIdController = async (
  req: Request,
  res: Response
) => {
  const userId: number = Number(req.params.userId);
  const data = await getCartDetailsByUserId(userId);
  res.json(data);
};
const EmptyCartByUserIdController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.userId);
  const data = await EmptyCartByUserId(userId);
  res.json(data);
};

export {
  increaseQuantityByProductIdController,
  decreaseQuantityByProductIdController,
  getQuantityByUserIdAndproductIdController,
  getCartDetailsByUserIdController,
  EmptyCartByUserIdController,
};
