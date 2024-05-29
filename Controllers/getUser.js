import { userData } from "../Mongoose/mongooseShcema.js"

async function getUser(req, res){
    let data = await userData.find()
    return res.json({ message: "hello gokul", data })
}

export {getUser}