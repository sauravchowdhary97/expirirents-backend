const mongoose = require("mongoose");
mongoose.pluralize(null);

var ListingSchema = new mongoose.Schema({
    vehicle : {
        type : String,
        // required : "Required"
    },
    price : {
        type : String,
        // required : "Required"
    },
    location : {
        type : String,
        // required : "Required"
    },
    numWheels : {
        type : String,
        // required : "Required"
    },
    age : {
        type : String,
        // required : "Required"
    }
});

mongoose.model("listing", ListingSchema);