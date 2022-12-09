import express from "express";
import "express-async-errors";
import { errorHandler } from "./errors/appError";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.use(errorHandler);

export default app;
