var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    if(filename == './'){
        filename = './index'
    }
    filename = filename + '.html';
    fs.readFile(filename, function(err, data){
        if (err){
            res.writeHead(404,{'Content-Type':'Text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);