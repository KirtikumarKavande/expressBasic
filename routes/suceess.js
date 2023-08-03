const express=require('express');
const path=require('path')
const pathDir = require("../util/path");
const router =express.Router()

const app=express()
router.use('/success',(req,res)=>{
    console.log( "name",req.body.name)
    console.log( "email",req.body.email)

    res.sendFile(path.join(pathDir,'views','success.html'));
})
module.exports=router