import { userData } from "../Mongoose/mongooseShcema.js";
import bcrypt from "bcrypt"
import { generateToken } from "../token/token.js";
async function loginUser(req, res){
    let { gmail, password } = req.body;
    console.log(req.body);
    if (password && gmail) {
        let data = await userData.findOne({ "gmail": gmail })
        console.log("--->", data);
        if (data) {
            let trueUser = await bcrypt.compare(password, data.password)
            if (trueUser) {
                let token = generateToken({ gmail, password })
                return res.json({ message: "login successfull completed", token })
            }
            else {
                return res.json({ message: "login failed" })
            }
        }
        else {
            return res.json({ message: "not a valid user" })
        }
    }
    else {
        return res.json({ message: "please enter all the forms" })
    }
}

export {loginUser}