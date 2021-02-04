import express from "express";
import { getRate } from "../controller/rateController.js";

const router = express.Router();

router.get("/", getRate);

export default router;
