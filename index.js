import e from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {config} from "dotenv";
import mongoose from "mongoose";
import {router} from "./Router/router.js"

const app = e()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
config()

app.use(router)


mongoose.connect(process.env.MONGOOSE_DB).then(()=>{
    app.listen(process.env.PORT,()=>{
      console.log(process.env.PORT,"port is running");
    })
}).catch(err=>{
    console.log("---->error",err);
})