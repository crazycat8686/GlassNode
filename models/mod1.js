import { Timestamp } from "mongodb";
import mongoose from "mongoose";


const sch = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    file : {
        type  : String,
        required : true
    },
    code : {
        type : String,
        required: true
    }

},
{
    timestamps : true
});


const mods = mongoose.model("trialschema",sch);
export default mods