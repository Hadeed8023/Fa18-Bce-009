import express from "express";
import { getUsedCar1 } from "../controllers/UsedCar1.js";
import { postUsedCar1 } from "../controllers/UsedCar1.js";

const router= express.Router();

//get, post, put, delete

router.get("/", getUsedCar1)
router.post("/", postUsedCar1 )


export default router;