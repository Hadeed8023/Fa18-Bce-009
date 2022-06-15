
import applicantsModel from "../models/applicants.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken"


export const getApplicants = async (req, res)=>{

    try{

        const Applications = await applicantsModel.find();
        res.json(Applications);

    }

    catch(error){
        console.log("Not Found in Database")
    }
};

export const DeleteApplicants = async (req, res)=>{

    try{

        const deleteRecord= await applicantsModel.findByIdAndDelete(req.params.id);
        res.json(deleteRecord);
        console.log("Successfully Deleted");
       

    }

    catch(error){
        console.log("Not Found in Database")
    }
};

export const updateUser = async (req, res)=>{

    try{

  
        const updateRecord= await applicantsModel.findByIdAndUpdate(req.params.id,req.body);
        res.json(updateRecord);
        const token=jwt.sign(req.body,"Hello");
        updateRecord.token=token;
        await updateRecord.save();
        res.json(updateRecord);
      

    }

    catch(error){
        console.log("Not Found in Database")
    }
};




export const CreateApplicants = async (req, res)=>{

 /*const newApplicant = new applicantsModel({
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     email: req.body.email,
     password: req.body.password,
     confirmPassword: req.body.confirmPassword


 })*/

 try{
   // const token= await newApplicant.generateAuthToken();
    const newApplicant = new applicantsModel(req.body);
    await newApplicant.save();
    res.json(newApplicant);
   
    

   
}

catch(error){

    console.log(error)

}


};

