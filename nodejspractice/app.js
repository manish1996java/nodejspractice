const http = require("http");
const fs = require("fs");



const server = http.createServer((req,res) => {
const url= req.url;
const method = req.method;
    
    if(url == '/'){
        res.write("<html>");
        res.write("<head><title> this is my web title </title></head>");
        res.write("<body> <form method='post' action='/massage'> ");
        res.write("<input type='text' name='massage'>");
        res.write("<button>submit</button>");
        res.write("</body>");
        res.write("</html>");
        return res.end();

    }
    if(url === '/massage' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk);
        })
        req.on('end',()=>{
            const bodyparse = Buffer.concat(body).toString();
            console.log('end run');
            console.log(bodyparse);
            const massage = bodyparse.split('=')[1];
            fs.writeFileSync('message.txt',massage);

            res.setHeader("content-type",'text/html');
            res.write("<h2>hey bro whatsup</h2>");
        })
      
    }
    
})

server.listen(3000);