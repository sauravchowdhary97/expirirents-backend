const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/expirirents", { useNewUrlParser: true },(error)=>{
  if(!error)
    console.log("Success! Connected to database!");
  else
    console.log("Error connecting to database!");
});

const Login = require("./login.model")
const Profile = require("./profile.model")
const Listing = require("./listing.model")
