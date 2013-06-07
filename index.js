function http_fiddle() {
    var http_f = {};
    var hn = null;

    var server = {};
    server.listen = function(port) {
        var resMsg = '';
        var res = {};
        res.writeHead = function(statusCode, opts) {};
        res.write = function(msg) {
            resMsg += msg;
        };
        res.end = function(msg) {
            resMsg += msg;
            console.log(resMsg);
        };

        setTimeout(function() {
            hn({}, res);
        }, 3000);
    };

    http_f.createServer = function(handler) {
        hn = handler;
        return server;
    };

    return http_f;
}
