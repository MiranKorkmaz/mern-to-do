import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    try {
        console.log(req.headers)
        const token = req.headers.authorization.split(' ')[1]
        const isCustomAuth = token.length < 500
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, "secret123")
            req.userId = decodedData?.id
        } else {
            console.log("error")
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

export default auth;