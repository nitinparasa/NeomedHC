var gzippo = require('gzippo');
var express = require('express');
var app = express();

/*app.use(express.logger('dev'));*/
/*app.use(gzippo.staticGzip("" + __dirname + "/dist"));*/
app.use(express.static(__dirname + "/app"));
app.listen(process.env.PORT || 8000);
