import express from "express";
import { getCars } from "../controllers/cardetail.js";
import { getlogin } from "../controllers/cardetail.js";

const router= express.Router();

//get, post, put, delete

router.get("/", getCars)

router.post("/", getlogin)


export default router;