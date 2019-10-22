const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../utils/path');

const products = [];

router.get('/add-product',(req,res,next)=>{
    // console.log('middelware2'); 
    // res.sendFile(path.join(rootdir,'views','add-product.html'))
    res.render('add-product');
    
});
router.post('/add-product',(req,res,next)=>{
    // console.log(req.body);
    products.push({title: req.body.title});
    // console.log(products);
    res.redirect('/shop/');
    
});
module.exports.routes = router;
module.exports.products = products;