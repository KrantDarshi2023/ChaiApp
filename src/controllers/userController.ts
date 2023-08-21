import { Request, Response } from "express";
import {
  addUser,
  //   getUserById,
  loginUser,
  //   updateUserById,
} from "../services/userServices";
export interface IUsers {
  first_name: string;
  last_name: string;
  gender: string;
  address: string;
  email: string;
  password: string;
  age: number;
  image?: string;
}

const addUserController = async (req: Request, res: Response) => {
  const user: IUsers = req.body;
  const data = await addUser(user);
  res.send(data);
};
const loginUserController = async (req: Request, res: Response) => {
  const user: IUsers = req.body;
  const data = await loginUser(user);
  res.send(data);
};
export { addUserController, loginUserController };
