import express from "express";
import {
  getAllFromOrderTableByUserIdController,
  insertIntoOrderTableController,
} from "../controllers/myOrderController";

var myOrderRouter = express.Router();

myOrderRouter.post("/add/:userId", insertIntoOrderTableController);
myOrderRouter.get("/all/:userId", getAllFromOrderTableByUserIdController);
export default myOrderRouter;
