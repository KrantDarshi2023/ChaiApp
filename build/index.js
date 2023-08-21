"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
// import userRouter from "./routes/userRoutes";
// import blogRouter from "./routes/blogRoutes";
const cors_1 = __importDefault(require("cors"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
exports.app = (0, express_1.default)();
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use("/users", userRoutes_1.default);
exports.app.use("/products", productRoutes_1.default);
// app.use("/blog", blogRouter);
exports.app.listen(1111, () => {
    console.log(`Running.....`);
});
