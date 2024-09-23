import express from "express";
const router = express.Router();

import {getcontact} from "../controller/contact.controller.js"

router.post("/", getcontact);

export default router;