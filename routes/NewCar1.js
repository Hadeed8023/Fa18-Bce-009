import express from "express";
import { getNewCar1 } from "../controllers/NewCar1.js";
import { postNewCar1 } from "../controllers/NewCar1.js";
import { isAuth } from "../middleware.js/middleware.js";

const router= express.Router();

//get, post, put, delete

router.get("/", isAuth, getNewCar1)
router.post("/", postNewCar1 )


export default router;