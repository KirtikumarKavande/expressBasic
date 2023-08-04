const express = require("express");
const productcontroller=require('../cotrollers/products')
const router = express.Router();

router.get("/add-product",productcontroller.getProduct );

router.post("/add-product", productcontroller.postProduct);

module.exports=router
