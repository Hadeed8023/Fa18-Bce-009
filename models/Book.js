import mongoose from "mongoose";

const BookStructure = mongoose.Schema({
    image: String,
    text: String,
    title: String,
    Engine: String,
    Model:String,
    Total:String,
    price:String,
    
});

const Book= mongoose.model("book",BookStructure);

export default Book;