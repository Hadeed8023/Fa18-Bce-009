import bodyParser from "body-parser";
import cors from "cors";
import express  from "express";
import mongoose from "mongoose";
import Applicants from './routes/applicants.js';
import Cardetails from './routes/cardetail.js';
import UsedCar1 from './routes/UsedCar1.js';
import NewCar1 from './routes/NewCar1.js';
import cookieParser from "cookie-parser";
import BookedCar from './routes/BookedCar.js'
import del from './routes/del.js';
import  jwt  from "jsonwebtoken"




const app=express();


const url="mongodb+srv://hadeed:hadeed123@cluster0.yd8s2us.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true}).then(()=>console.log("Database Connected"));

app.listen(5000)

//Now using Middleware

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended:true }));
app.use(cookieParser());


app.use("/SignIn",Applicants);
app.use("/ShowUser",Applicants);

app.use("/",Cardetails);
app.use("/UsedCars",UsedCar1);
app.use("/NewCars",NewCar1);
app.use("/NewCars",NewCar1);

app.use("/ShowUser",Applicants);

app.use("/Update",Applicants);

app.use("/UsedCars",UsedCar1);

app.use("/NewCars",NewCar1);

app.use("/Booking",BookedCar);






//app.use("/",login)