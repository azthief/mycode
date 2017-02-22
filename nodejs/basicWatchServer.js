var http = require('http');
var fs = require('fs');

fs.watchFile('./index.html', function(curr, prev) {
	console.log('watch');
    fs.readFile('./index.html', function(err, html) {
        if (err) {
            throw err;
        }
        http.createServer(function(request, response) {
        	console.log('Create Server');
            response.writeHeader(200, {
                "Content-Type": "text/html"
            });
            response.write(html);
            response.end();
        }).listen(8000);
    });
});