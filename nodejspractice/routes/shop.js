const express = require('express');
const path = require('path');
const router = express.Router();

const rootdir = require('../utils/path');
const adminData = require('../routes/admin');


router.get('/',(req,res,next)=>{
    console.log(adminData.products);
    console.log('middelware shop');
    // res.send('<h1>hello</h1>');
    // res.sendFile(path.join(rootdir,'views','shop.pug'));
    // res.render('shop');
    res.render('shop');
    // console.log(__filename);
    // console.log(__dirname);
    // console.log(path.dirname());
});

module.exports = router;