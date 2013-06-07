function http_fiddle() {
    var http_f = {};
    http_f.createServer = function(handler) {
        setTimeout(function() {
            handler({}, {});
        }, 2000);
    };
    return http_f;
}
