import express from "express";
import { getBookedCar1 } from "../controllers/BookedCar.js";
import { DeleteBooking } from "../controllers/BookedCar.js";


const router= express.Router();

//get, post, put, delete

router.get("/", getBookedCar1)

router.delete("/:id", DeleteBooking)



export default router;