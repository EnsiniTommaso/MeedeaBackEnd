import { jwtDecode } from "jwt-decode";
import express from 'express'
const auth = express()
//function CheckIdToken

auth.use((req, res, next)=>{

    const IdToken = req.get('id-token')
    console.log(req.path)
    try {
        const decoded = jwtDecode(token);

        console.log(decoded)

        next()
    }catch (err){
        console.error(err)
    }
    
})

auth.get('/test-auth',(req, res)=>{
    console.log('dis a test')
    res.status(200).json({res:'boom'})
})
export default auth
