import mongoose from "mongoose";
import bcrypt from "bcrypt";


const applicantsStructure = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    confirmPassword: String,
  
   
});

applicantsStructure.pre('save', async function(next){
    try{

        //console.log("Called Before Saving")

        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(this.password, salt);
        this.password= hashedPassword;

        const hashedConfirmPassword= await bcrypt.hash(this.confirmPassword, salt);
        this.confirmPassword= hashedConfirmPassword;
        next()

    }
    catch(error){

        console.log("Problem In Database")
    }

})

/*applicantsStructure.methods.generateAuthToken= async function (){
    try{

        let tokenkhan= Jwt.sign({_id:this._id}, "mynameishadeedkhanofbcecomsats12");
        this.token= tokenkhan;
        await this.save();
        return this.token

    }
    catch(error){
        console.log("Error in Token")
    }
}*/

const applicantsModel= mongoose.model("Applicants",applicantsStructure);

export default applicantsModel;