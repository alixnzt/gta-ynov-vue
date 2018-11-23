// server.js
var path = require('path');
var express = require('express');
var serveStatic = require('serve-static');
const app = express();
app.use("/", serveStatic ( path.join (__dirname, '/dist') ) )
// app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})