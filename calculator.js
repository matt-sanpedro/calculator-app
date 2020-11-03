const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// pass data that comes from HTML form
// setting extended to true allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get('/', function(req, res) {
  // res.send('<h1>Hello World!</h1>')
  // console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
  // res.send('Thanks for posting that!');
  // console.log(req.body);

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('The result of the calculation is ' + result);
})

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
