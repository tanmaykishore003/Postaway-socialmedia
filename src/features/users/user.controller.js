import UserModel from "./user.model.js"

export default class UserController {
    signUp(req, res) {
        const {name, email, password} = req.body
        const user = UserModel.signup(name, email, password);
        res.send(user)
    }

    signIn(req, res) {
        const {email, password} = req.body
        const isValid = UserModel.signin(email, password)
        if(!isValid) {
            return res.send('Incorrect Credentials')
        }
        res.send(isValid)
    }
}