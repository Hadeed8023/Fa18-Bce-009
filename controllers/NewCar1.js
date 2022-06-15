import Newcar1Model from "../models/NewCar1.js";
import Book from "../models/Book.js";


export const getNewCar1 = async (req, res)=>{

    try{

        const NewCar1 = await Newcar1Model.find();
        res.json(NewCar1);
       // console.log(Cars)

    }

    catch(error){
        console.log("Not Found in Database")
    }
};

export const postNewCar1 = async (req, res)=>{

    try{
        const newBooked = new Book(req.body);
        await newBooked.save();
        res.json(newBooked);

      

    }

    catch(error){
        console.log("Not Found in Database")
    }
};
