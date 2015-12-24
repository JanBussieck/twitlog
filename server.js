var express = require('express'),
    bodyParser = require('body-parser'),
    compression = require('compression'),
    app = express();

app.set('port', process.env.PORT || 5000);

app.use(bodyParser.json());
app.use(compression());

app.get('/', function(req, res) {
  res.send('hello world');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
    console.log('The Server Address', server.address);
    console.log('The Server Address', server.port);
});
