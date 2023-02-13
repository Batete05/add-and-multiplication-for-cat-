const express = require('express');
const app = express();

app.get('/calculate', (req, res) => {
  // Get the numbers from the query string
  const numbers = req.query.numbers;

  // Convert the numbers string into an array of numbers
  const numbersArray = numbers.split(',').map(num => parseInt(num));

  // Calculate the sum of numbers in the array
  const sum = numbersArray.reduce((total, num) => total + num, 0);

  // Calculate the product of numbers in the array
  const product = numbersArray.reduce((total, num) => total * num, 1);

  // Return the sum and product in the response
  res.json({
    sum: sum,
    product: product
  });
});

app.listen(2000, () => {
  console.log('Calculator API is running on port 2000');
});
//This a package to help you in adding and multiplying a set of numbers using express.js and get method