import { jwtDecode } from "jwt-decode";
import express from 'express'
import { CheckIdToken } from "../controllers/firebase-auth-controller.js";
const TestAuth = express()


TestAuth.use(async (req, res, next)=>{

    const IdToken = req.get('id-token')
    console.log(req.path)
    try {
        await CheckIdToken(IdToken)
        const decoded = jwtDecode(IdToken);

        console.log(decoded)

        return next()

    }catch (err){
        console.error(err)
        return
    }
    
})

TestAuth.post('/test-auth',(req, res)=>{
    console.log('dis a test')
    res.status(200).json({res:'boom'})
})
export default TestAuth
