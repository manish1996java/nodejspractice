const http = require('http');
const bodyparser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

const adminData= require("./routes/admin");
const shoproute = require('./routes/shop');
const rootdir = require('./utils/path');

app.set('view engine','ejs');
app.set('views','views');


app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminData.routes);
app.use('/shop',shoproute)

app.use((req,res,next)=>{
    // res.status(404).send('<h1>Page not Found</h1>')
    // res.status(404).sendFile(path.join(rootdir,'views','404.html'));
    res.status(404).render('404',{pageTitle:'404 page not found'});
})

app.listen('5300');
// const server = http.createServer(app);
// server.listen('5300')







// const routes = require('./routes');


// const server = http.createServer(routes )
// server.listen('5300');