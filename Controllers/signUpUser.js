import { userData } from "../Mongoose/mongooseShcema.js";
import bcrypt from "bcrypt"
async function signUpUser(req, res){
    try {
        let { name, gmail, password } = req.body;
        if (name && gmail && password) {
            let hashpassword = await bcrypt.hash(password, 10)
            let data = await userData.create({ name, gmail, "password": hashpassword })
            return res.json({ message: "user successfully added", data })
        }
        else {
            return res.json({ message: "please enter all the input fields" })
        }
    }
    catch (err) {
        console.log("---->error", err);
    }
}

export {signUpUser}