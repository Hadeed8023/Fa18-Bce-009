import express from "express";
import { getApplicants } from "../controllers/applicants.js";
import { CreateApplicants } from "../controllers/applicants.js";
import { DeleteApplicants } from "../controllers/applicants.js";
import { updateUser } from "../controllers/applicants.js";

const router= express.Router();

//get, post, put, delete
//,isAuth

router.get("/", getApplicants)

router.post("/", CreateApplicants)

router.delete("/:id", DeleteApplicants)

router.put("/:id", updateUser)

export default router;