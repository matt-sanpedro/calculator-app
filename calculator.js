const express = require('express');
const bodyParser = require('body-parser');

const app = express();
// pass data that comes from HTML form
// setting extended to true allows us to post nested objects
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

// Caculator: addition
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
});

// Calculator: BMI
app.get('/bmicalculator', function(req, res) {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = weight / (Math.pow(height, 2));
  var bmiRound = Math.round(bmi);

  var interpretation;

  if (bmi < 18.5) {
      interpretation = "Your BMI is " + bmiRound + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <=24.9) {
      interpretation = "Your BMI is " + bmiRound + ", so you have a normal weight.";
  } else {
      interpretation = "Your BMI is " + bmiRound + ", so you are overweight.";
  }
  // Your BMI is <bmi>, so you are underweight.
  // Your BMI is <bmi>, so you have a normal weight.
  // Your BMI is <bmi>, so you are overweight.
  res.send(interpretation);
});


app.listen(port, function() {
  console.log('Server started on port ' + port);
});
