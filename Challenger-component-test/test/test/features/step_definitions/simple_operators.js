const assert = require('assert')
const { Given, When, Then } = require("@cucumber/cucumber");
let Calculator = require("../../../src/lib/Calculator");
let result;

Given('que eu tenha uma calculadora', function () {
  newCalculator = new Calculator();
});

When('eu digitar os números {string} e {string} para a operação de {string}', function (number1, number2, op) {
  switch (op) {
    case 'soma':
      result = newCalculator.sum(parseInt(number1), parseInt(number2));
      break;
    
    case 'subtração':
      result = newCalculator.subtraction(parseInt(number1), parseInt(number2));
      break;
    
    case 'multiplicação':
      result = newCalculator.multiplication(parseInt(number1), parseInt(number2));
      break;

    case 'divisão':
      result = newCalculator.division(parseInt(number1), parseInt(number2));
      break;
  
  }
});

Then('devo receber o resultado igual a {string}', function (resultCal) {
  assert.equal(parseInt(resultCal), result);
});

