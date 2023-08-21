import { pool } from "../database/mySqlConnection";

const getProductsofChaiAndCoffeeCategory = async (
  category1: string,
  category2: string
) => {
  const productDetails = await pool.query(
    `select * from products where categories='${category1}' or categories='${category2}'`
  );
  if (Array.isArray(productDetails[0]) && productDetails[0].length === 0) {
    return "No record found";
  } else {
    return productDetails[0];
  }
};
const getProductsofSnacksCategory = async (category1: string) => {
  const productDetails = await pool.query(
    `select * from products where categories='${category1}'`
  );
  if (Array.isArray(productDetails[0]) && productDetails[0].length === 0) {
    return "No record found";
  } else {
    return productDetails[0];
  }
};
const getProductByName = async (name: string) => {
  const productDetails = await pool.query(
    `select * from products where product_name='${name}'`
  );
  if (Array.isArray(productDetails[0]) && productDetails[0].length === 0) {
    return "No record found";
  } else {
    return productDetails[0];
  }
};
const getPriceOfProductByProductId = async (productId: number) => {
  const price = await pool.query(
    `select price from products where product_id=${productId}`
  );
  return price[0];
};
export {
  getProductsofChaiAndCoffeeCategory,
  getProductsofSnacksCategory,
  getProductByName,
  getPriceOfProductByProductId,
};
