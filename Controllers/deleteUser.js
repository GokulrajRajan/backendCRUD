import { userData } from "../Mongoose/mongooseShcema.js";

function deleteUser(req, res){
    let gmail = req.user.gmail
    try {
        if (gmail) {
            userData.deleteOne({ "gmail": gmail }).then(() => {
                return res.json({ message: "user deleted" })
            }).catch(err => {
                console.log(err);
            })
        }
        else {
            res.json({ message: "user not found" })
        }
    }
    catch (err) {
        console.log(err);
    }
}

export {deleteUser}