const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
mongoose.pluralize(null);

const LoginModel = mongoose.model("login");

router.get("/login", (req, res)=>{

    // Setting info
    // var i = new LoginModel();
    // i.email = "Saurav";
    // i.password = "abc123";
    // i.save();
    
    // Getting info
    LoginModel.find((err, docs)=>{
         if (!err)
         {
            console.log("Login")
            //console.log(docs);
            res.send(" Login Controller!!")
         }  
         else
         {
             res.send("Error occurred!!");
         }
    });
    
});

const ProfileModel = mongoose.model("profile");

router.get("/profile", (req, res)=>{

    // Setting info
    // var i = new ProfileModel();
    // i.firstName = "Saurav";
    // i.lastName = "Chowdhary";
    // i.email = "Saurav@gmail.com";
    // i.phone_number = 6086089999
    // i.save();

    ProfileModel.find((err, docs)=>{
         if (!err)
         {
            console.log("Profile:")
            //console.log(docs);
            res.send("Profile Controller!!")
         }  
         else
         {
             res.send("Error occurred!!");
         }
    });
    
});

module.exports = router;

