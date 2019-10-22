const fs = require('fs');

const requestHandler = (req,res) =>{

    const url = req.url;
    const method = req.method;
    console.log(req.url, req.method);
    if(url === '/'){
        res.write("<html>");
        res.write("<head><title> this is my web title </title></head>");
        res.write("<body> <form method='post' action='/message'> ");
        res.write("<input type='text' name='massage'>");
        res.write("<button>submit</button>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data',(chunk)=>{
            console.log('chunk of data');
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            // console.log(body);
            const parsebody = Buffer.concat(body).toString();
            // console.log('end chunk of data');
            // console.log(parsebody);
            const msg = parsebody.split('=')[1];
            fs.writeFile('mymssage.txt',msg,(err)=>{
                console.log(err);
                res.statusCode= 302;
                // res.setHeader('Location','/');
                // return res.end();
            });
        })
        res.setHeader('Content-type','text/html');
        res.write('<h2>Everty this is all Right</h2>')
        return res.end();
    }

}

module.exports = requestHandler;