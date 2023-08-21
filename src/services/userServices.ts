import { pool } from "../database/mySqlConnection";
import bcrypt from "bcrypt";
import { sign, Secret } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

import { IUsers } from "../controllers/userController";

export const addUser = async (user: IUsers) => {
  try {
    const {
      first_name,
      last_name,
      gender,
      address,
      age,
      image,
      email,
      password,
    } = user;
    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await pool.query(
      `insert into users(first_name,last_name,gender,address,age,image,email,password) values ('${first_name}','${last_name}','${gender}','${address}',${age},'${image}','${email}','${hashedPassword}')`
    );
    return "Record Inserted Successfully";
  } catch (err) {
    return err;
  }
};
export const loginUser = async (user: IUsers) => {
  try {
    const { email, password } = user;
    if (!email) {
      return "Please Enter credentials";
    } else {
      const data = await pool.query(
        `select user_id, email,password from users where email='${email}'`
      );
      const d: any = data[0];
      if (d.length == 0) {
        return "Wrong Credentials";
      } else {
        const passCompare = await bcrypt.compare(password, d[0].password);

        if (passCompare) {
          const id = d[0].user_id;
          const token = sign(d[0].email, process.env.ACCESS_TOKEN as Secret);
          return { id, token };
        } else {
          return "Wrong Credentials";
        }
      }
    }
  } catch (err) {
    return err;
  }
};
