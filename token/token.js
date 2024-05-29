import jwt from "jsonwebtoken";


function generateToken({ gmail, password }) {
    return jwt.sign({ gmail, password }, process.env.SECRET_KEY, { expiresIn: "24h" })
}


function verify(token) {
    return jwt.verify(token, process.env.SECRET_KEY)
}

async function verifyToken(req, res, next) {
    try {
        let token = req.headers.authorization;
        if (token) {
            let auth = await verify(token)
            req.user = auth
            console.log("---->",req.user.gmail,req.user.password);
            return next()
        }
        else {
            return res.json({ message: "please login first" })
        }
    }
    catch (err) {
        console.log("---->err");
    }
}

export { generateToken, verifyToken }
