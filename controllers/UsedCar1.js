import Usedcar1Model from "../models/UsedCar1.js";
import Book from "../models/Book.js";


export const getUsedCar1 = async (req, res)=>{

    try{

        const UsedCar1 = await Usedcar1Model.find();
        res.json(UsedCar1);
       // console.log(Cars)

    }

    catch(error){
        console.log("Not Found in Database")
    }
};

export const postUsedCar1 = async (req, res)=>{

    console.log(req.body)
    try{
        const newBooked1 = new Book(req.body);
        console.log(newBooked1)
        await newBooked1.save();
        res.json(newBooked1);

      

    }

    catch(error){
        console.log("Not Found in Database")
    }
};
