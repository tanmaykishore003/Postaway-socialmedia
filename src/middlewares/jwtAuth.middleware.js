import jwt from 'jsonwebtoken'

const jwtAuth = (req, res, next) => {
    const { jwtToken } = req.cookies;
    const key = 'MzkybiyJ7Fd4zCrNidk9mb5VSHEEpc3C'
    jwt.verify(jwtToken, key, (err, decoded) => {
        if(err) {
            res.status(401).send({ success: false, msg: "login to continue" })
        }
        else {
            const userPayload = decoded
            req.userId = userPayload.userId
            next()
        }
    })
}

export default jwtAuth