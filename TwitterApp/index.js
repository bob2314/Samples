var express = require('express');
var path = require('path');
var index = require('./routes/index');
var tweets = require('./routes/tweets');
var app = express();

app.set('port', (process.env.PORT || 5010));

// views is directory for all template files
app.set('views', __dirname + 'views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

// serve static assets from the public directory
app.use(express.static(path.join(__dirname, '/public')));

// look for view html in the views directory
app.set('views', path.join(__dirname, '/views'));

// use ejs to render 
app.set('view engine', 'ejs');

// setup routes
app.use('/', index);
app.use('/tweets', tweets);


module.exports = app;

var port = process.env.PORT || 5010;
app.listen(port, function() {
  console.log('Super Cool Tweets is listening on ' + port);
});

