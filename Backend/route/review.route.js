import express from "express";
const router = express.Router();

import {getreview} from "../controller/review.controller.js"

router.post("/", getreview);

export default router;