import express from "express";
const router = express.Router();

import { getBook } from "../controller/book.controller.js";



router.get("/", getBook);

export default router;