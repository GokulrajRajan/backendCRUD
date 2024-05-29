import e from "express";
const router = e.Router()
import bcrypt from "bcrypt"

import { userData } from "../Mongoose/mongooseShcema.js";

import {verifyToken } from "../token/token.js";

import { updateUser } from "../Controllers/updateUser.js";
import { signUpUser } from "../Controllers/signUpUser.js";
import { loginUser } from "../Controllers/loginUser.js";
import { deleteUser } from "../Controllers/deleteUser.js";
import { getUser } from "../Controllers/getUser.js";

router.post("/signup", signUpUser)
router.post("/login", loginUser)
router.put("/updateuser", verifyToken, updateUser)
router.delete("/deleteuser", verifyToken, deleteUser)
router.get("/home", verifyToken,getUser )


export { router }