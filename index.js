var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({});

var target = process.env.TARGET || 'http://localhost:5060';
var port = process.env.PORT || 5050;

var server = http.createServer(function(req, res) {
    proxy.web(req, res, { target: target });
});

server.listen(port);
