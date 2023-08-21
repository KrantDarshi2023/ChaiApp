import express from "express";
import {
  EmptyCartByUserIdController,
  decreaseQuantityByProductIdController,
  getCartDetailsByUserIdController,
  getQuantityByUserIdAndproductIdController,
  increaseQuantityByProductIdController,
} from "../controllers/cartController";

var cartRouter = express.Router();

cartRouter.post(
  "/increasequantity/:productId/:userId",
  increaseQuantityByProductIdController
);
cartRouter.post(
  "/decreasequantity/:productId/:userId",
  decreaseQuantityByProductIdController
);
cartRouter.get(
  "/quantity/:productId/:userId",
  getQuantityByUserIdAndproductIdController
);
cartRouter.get("/cartDetails/:userId", getCartDetailsByUserIdController);
cartRouter.delete("/emptyCartDetails/:userId", EmptyCartByUserIdController);

export default cartRouter;
