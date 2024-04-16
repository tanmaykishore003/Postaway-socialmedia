import UserModel from "./user.model.js"
import jwt from 'jsonwebtoken'

export default class UserController {
    registerUser(req, res) {
        const userData = req.body
        if(userData) {
            const user = UserModel.addUser(userData);
            res.status(201).send({ status: "success", user})
        }
        else {
            res.status(401).send({status: "failure", msg: "Invalid user details"})
        }
    }

    loginUser(req, res) {
        const status = UserModel.confirmUser(req.body)
        if(status) {
            const key = 'MzkybiyJ7Fd4zCrNidk9mb5VSHEEpc3C'
            const token = jwt.sign(
                { userId: status.id, userEmail: status.email},
                key,
                { expiresIn: "1h"}
            )

            res
            .status(201)
            .cookie("jwtToken", token, { maxAge: 900000, httpOnly: false })
            .cookie("userId", status.id, { maxAge: 900000, httpOnly: false })
            .send({ status: "success", msg: "login successfull", token });
        }
        else {
            res.status(401).send({ status: "failure", msg: "invalid user details" })
        }
    }
}