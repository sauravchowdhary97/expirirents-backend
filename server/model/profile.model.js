const mongoose = require("mongoose");
mongoose.pluralize(null);

var ProfileSchema = new mongoose.Schema({
    firstName : {
        type : String,
        //required : "Required"
    },
    lastName : {
        type : String,
    },
    email : {
        type : String,
        //required : "Required"
    },
    phone_number : {
        type : String,
    }
});

mongoose.model("profile", ProfileSchema);