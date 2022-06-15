import express from "express";
import { Newdel } from "../controllers/del.js";

const router= express.Router();

//get, post, put, delete

router.delete("/", Newdel)


export default router;