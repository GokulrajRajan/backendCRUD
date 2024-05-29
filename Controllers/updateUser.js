import { userData } from "../Mongoose/mongooseShcema.js";
import bcrypt from "bcrypt"
async function updateUser(req,res){
    let { gmail, password, newname } = req.body;
    try {
        if (gmail && password && newname) {
            let data = await userData.findOne({ "gmail": gmail })
            if (data) {
                let hashpassword = await bcrypt.compare(password, data.password)
                if (hashpassword) {
                    let updateData = await userData.updateOne({ "gmail": gmail }, { $set: { "name": newname } })
                    console.log(updateData);
                    let latestdata = await userData.findOne({ "gmail": gmail })
                    return res.json({ message: "name successfully change", latestdata })
                }
                else {
                    return res.json({ message: "password is incorrect" })
                }
            }
            else {
                res.json({ message: "user not found please check your gmail" })
            }
        }
        else {
            res.json({ message: "please enter all the inputs" })
        }
    }
    catch (err) {
        console.log("--->err",err);
    }

}

export {updateUser}