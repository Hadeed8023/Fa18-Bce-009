import mongoose from "mongoose";
import bcrypt from "bcrypt";


const UsedCar1Structure = mongoose.Schema({
    image: String,
    text: String,
    title: String,
    Engine: String,
    Model:String,
    Total:String,
    price:String,
    id:Number,
    
});

const Usedcar1Model= mongoose.model("UsedCar1",UsedCar1Structure);

export default Usedcar1Model;