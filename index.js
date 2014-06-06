var Hapi = require('hapi');

var server = Hapi.createServer('localhost', 8080);

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        reply('Hello ' + request.params.name);
    }
});

server.start();
console.info('Server started http://localhost:8000');
