import mongoose from "mongoose";

let userdata = new mongoose.Schema({
    name:String,
    gmail:String,
    password:String
})

let userData = mongoose.model("crud",userdata)
export{userData}