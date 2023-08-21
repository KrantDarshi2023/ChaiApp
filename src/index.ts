import express from "express";
// import userRouter from "./routes/userRoutes";
// import blogRouter from "./routes/blogRoutes";
import cors from "cors";
import userRouter from "./routes/userRoutes";
import productRouter from "./routes/productRoutes";
import cartRouter from "./routes/cartRoutes";
import myOrderRouter from "./routes/myOrderRoutes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/myOrder", myOrderRouter);

app.listen(1111, () => {
  console.log(`Running.....`);
});
