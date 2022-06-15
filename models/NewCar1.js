import mongoose from "mongoose";
import bcrypt from "bcrypt";


const NewCar1Structure = mongoose.Schema({
    image: String,
    text: String,
    title: String,
    Engine: String,
    Model:String,
    Total:String,
    price:String,
    
});

const Newcar1Model= mongoose.model("NewCar1",NewCar1Structure);

export default Newcar1Model;