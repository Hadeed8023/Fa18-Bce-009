import carsModel from "../models/cardetail.js";
import applicantsModel from "../models/applicants.js"
import { resmessage } from "../middleware.js/constant.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';



export const getCars = async (req, res)=>{

    try{

        const Cars = await carsModel.find();
        res.json(Cars);
       // console.log(Cars)

    }

    catch(error){
        console.log("Not Found in Database")
    }
};


export const getlogin = async (req, res)=>{
    try{
        const email=req.body.email.toString();
        const password=req.body.password.toString();
        


        const validate_user = await applicantsModel.findOne({email:email});
       // const compare = await bcrypt.compare(password, validate_user.password);
       // console.log(compare)
        
        //console.log(validate_user)
        if (validate_user) {
          const compare = await bcrypt.compare(password, validate_user.password);
        //    console.log(compare);
          if (compare) {
           
            const token=jwt.sign(email,"Hello");
            
            const accessToken = `Bearer ${token}`;
            console.log(`JWT_TOKEN_CREATED | ${email} |${accessToken}`);

             res.cookie("Jwt",token,{
                 expires: new Date(Date.now() + 5000),
                  httpOnly:true
             })

           }
       
        };

        


    }

    catch(error){
        console.log("Not Found in Database")
    }
};
