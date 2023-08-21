import { pool } from "../database/mySqlConnection";

const insertIntoOrderTable = async (userId: number) => {
  const data =
    await pool.query(` INSERT INTO myOrder(user_id,product_id,quantity,product_name,image,price)
      SELECT cart.user_id, cart.product_id, cart.quantity, products.product_name, products.image, products.price
      FROM  cart
      left JOIN products
      ON cart.product_id = products.product_id where user_id=${userId};`);
  const cartDetails = data[0];
  return cartDetails;
};
const getAllFromOrderTableByUserId = async (userId: number) => {
  const data = await pool.query(
    ` select * from myOrder where user_id=${userId};`
  );
  const cartDetails = data[0];
  return [cartDetails][0];
};
export { insertIntoOrderTable, getAllFromOrderTableByUserId };
