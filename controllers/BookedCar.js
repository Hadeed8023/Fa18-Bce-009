import Book from "../models/Book.js";

export const getBookedCar1 = async (req, res)=>{

    try{

        const NewBooked = await Book.find();
        res.json(NewBooked);
       // console.log(Cars)

    }

    catch(error){
        console.log("Not Found in Database")
    }
};

export const DeleteBooking = async (req, res)=>{

    try{

        const deleteBooking= await Book.findByIdAndDelete(req.params.id);
        res.json(deleteBooking);
        console.log("Successfully Deleted");
       

    }

    catch(error){
        console.log("Not Found in Database")
    }
};