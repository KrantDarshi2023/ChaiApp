import express from "express";
import {
  addUserController,
  loginUserController,
} from "../controllers/userController";

var userRouter = express.Router();

userRouter.post("/add", addUserController);
userRouter.post("/login", loginUserController);
export default userRouter;
