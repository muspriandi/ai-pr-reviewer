function average(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}

function isEven(n) {
  return n % 2 === 0;
}

function calculate(expression) {
  return new Function('return ' + expression)();
}

module.exports = { average, capitalize, isEven, calculate };
