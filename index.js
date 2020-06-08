let controller = require('./controller');
let bodyParser = require('body-parser');

let start_app = function () {
    controller.indentify_node_process.start();
    console.log('App started');
};

start_app();