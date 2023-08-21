import { Request, Response } from "express";
import {
  getAllFromOrderTableByUserId,
  insertIntoOrderTable,
} from "../services/myOrderServices";

const insertIntoOrderTableController = async (req: Request, res: Response) => {
  const userId: number = Number(req.params.userId);
  const data = await insertIntoOrderTable(userId);
  res.json(data);
};

const getAllFromOrderTableByUserIdController = async (
  req: Request,
  res: Response
) => {
  const userId: number = Number(req.params.userId);
  const data = await getAllFromOrderTableByUserId(userId);
  res.json(data);
};
export {
  insertIntoOrderTableController,
  getAllFromOrderTableByUserIdController,
};
