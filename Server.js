const http=require("http");
const filesys=require("fs");

http.createServer((req,res) => {
res.writeHead(200,{'Content-Type':'text/html'})
if(req.url==="/home" || req.url==="/"){
    let page=filesys.readFileSync("static/MyPort.html");
    res.write(page);
}else{
    let page=filesys.readFileSync("static/Error.html");
    res.write(page);
}

res.end();
}).listen(process.env.PORT, () => {console.log("server has started")})