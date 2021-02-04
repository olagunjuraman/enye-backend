import express from "express";
import dotenv from "dotenv";
import ratesRoutes from "./routes/rateRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddlewares.js";

dotenv.config();

const app = express();

app.use("/api/rates", ratesRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server successfully listening on port ${process.env.PORT}`);
});
