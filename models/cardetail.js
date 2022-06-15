import mongoose from "mongoose";
import bcrypt from "bcrypt";


const CarStructure = mongoose.Schema({
    image: String,
    text: String,
    title: String,
    link1: String,
    
});

const carsModel= mongoose.model("Cardetails",CarStructure);

export default carsModel;