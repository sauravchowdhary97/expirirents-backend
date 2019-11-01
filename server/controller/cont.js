const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = express.Router();
mongoose.pluralize(null);

const LoginModel = mongoose.model("login");

router.get("/login", (req, res)=>{

    // Getting info
    LoginModel.find((err, docs)=>{
         if (!err)
         {
            res.send("Login Controller!!")
         }  
         else
         {
             res.send("Error occurred!!");
         }
    });
    
});

router.post('/login',(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    
    // Setting info
    
    var input = new LoginModel();
    input.email = email;
    input.password = password;
    input.save();
    
    console.log("Login insertion made");
    res.end("yes");
  });

const ProfileModel = mongoose.model("profile");

router.get("/profile", (req, res)=>{

    ProfileModel.find((err, docs)=>{
         if (!err)
         {
            res.send("Profile Controller!!")
         }  
         else
         {
             res.send("Error occurred!!");
         }
    });
    
});

router.post('/profile',(req,res)=>{
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    var ph_no = req.body.phone_number;

    console.log("Profile inertion made");
    // Setting info
    var input = new ProfileModel();
    input.firstName = firstname;
    input.lastName = lastname;
    input.email = email;
    input.phone_number = ph_no;
    input.save();

    res.end("yes");
  });
  
  const ListingModel = mongoose.model("listing");

  router.get("/listing", (req, res)=>{

    ListingModel.find((err, docs)=>{
        if(!err){
            //console.log("Listing:")
            res.send("Listing Controller!")
        } else{
            res.send("Error occurred!");
        }
    });
  });

  router.post('/listing',(req,res)=>{
    var vehicle = req.body.vehicle;
    var price = req.body.price;
    var location = req.body.location;
    var numWheels = req.body.numwheels;
    var age = req.body.age;

    console.log("Listing insertion made");
    // Setting info
    var input = new ListingModel();
    input.vehicle = vehicle;
    input.price = price;
    input.numWheels = numWheels;
    input.location = location;
    input.age = age;
    input.save();

    res.end("yes");
  });

module.exports = router;
