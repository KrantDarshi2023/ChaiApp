import { response } from "express";
import { pool } from "../database/mySqlConnection";

const increaseQuantityByProductId = async (
  productId: number,
  userId: number
) => {
  const userExisted = await pool.query(
    `select * from cart where user_id=${userId}`
  );
  if (Array.isArray(userExisted[0]) && userExisted[0].length !== 0) {
    const productExisted = await pool.query(
      `select * from cart where product_id=${productId}`
    );
    if (Array.isArray(productExisted[0]) && productExisted[0].length !== 0) {
      const res = await pool.query(`UPDATE cart
      SET quantity = quantity +1
      WHERE product_id = ${productId}`);
    } else {
      const res = await pool.query(
        `insert into cart(product_id,user_id,quantity) values (${productId}, ${userId}, 1)`
      );
    }
  } else {
    const res = await pool.query(
      `insert into cart(product_id,user_id,quantity) values (${productId}, ${userId}, 1)`
    );
  }
  const cartDetails = await pool.query(
    `select * from cart where user_id=${userId} and product_id=${productId}`
  );
  return cartDetails[0];
};
const decreaseQuantityByProductId = async (
  productId: number | undefined,
  userId: number
) => {
  const quantity = await pool.query(
    `select quantity from cart where user_id=${userId} and product_id=${productId}`
  );
  const quant: any = quantity[0];
  console.log(quant[0].quantity);
  if (quant[0].quantity > 1) {
    await pool.query(`UPDATE cart
      SET quantity = quantity -1
      WHERE product_id = ${productId} and user_id=${userId}`);
    const cartDetails = await pool.query(
      `select * from cart where user_id=${userId} and product_id=${productId}`
    );
    return cartDetails[0];
  } else if (quant[0].quantity === 1) {
    await pool.query(
      `Delete from cart where user_id=${userId} and product_id=${productId}`
    );
    return "Item Deleted ";
  } else {
    return "can't decrease the quantity as it is already zero";
  }
};
const getQuantityByUserIdAndproductId = async (
  productId: number,
  userId: number
) => {
  const data = await pool.query(
    `select quantity from cart where user_id=${userId} and product_id=${productId}`
  );
  const quantity = data[0];
  return quantity;
};
const getCartDetailsByUserId = async (userId: number) => {
  const data =
    await pool.query(`SELECT cart.quantity,cart.product_id, products.product_name, products.image, products.price
  FROM  cart
  left JOIN products
  ON cart.product_id = products.product_id where user_id=${userId}`);
  const cartDetails = data[0];
  return cartDetails;
};
const EmptyCartByUserId = async (userId: number) => {
  const data = await pool.query(`Delete from cart where user_id=${userId};`);
  if (response.statusCode === 200) return "Item Deleted";
};
export {
  increaseQuantityByProductId,
  getQuantityByUserIdAndproductId,
  decreaseQuantityByProductId,
  getCartDetailsByUserId,
  EmptyCartByUserId,
};
