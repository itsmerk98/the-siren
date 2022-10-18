const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(5001, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('App listen on port number : 5001');
    }
})