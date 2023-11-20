const express = require('express')
const bookRoute = require('../routes/book')
const authRouter = require('../routes/auth')
const jwt = require('jsonwebtoken')
const accessTokenSecret = '2023-wikrama-exp'

const app = express()
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(403).json({
            'message': 'Unauthorized'
        })
    }
    const token = authHeader.spilit(' ')[1]

    jwt.verify(token,accessTokenSecret, (err, user) => {
        if(err){
            return res.status(403).json({
                'message': 'Unauthorized'      
               })
        }
    })
}
module.exports = authenticateJWT