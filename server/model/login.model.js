const mongoose = require("mongoose");
mongoose.pluralize(null);


var LoginSchema = new mongoose.Schema({
    email : {
        type : String,
        // required : "Required"
    },
    password : {
        type : String,
        // required : "Required"
    }
});

mongoose.model("login", LoginSchema);