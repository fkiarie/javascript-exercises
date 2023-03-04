const convertToCelsius = function (tempInput) {

  const c = (tempInput - 32) * 5 / 9;
  let celsius = c.toFixed(1);
  return parseFloat(celsius);
};

const convertToFahrenheit = function (tempInput) {
  const f = (tempInput * 9 / 5) + 32;
  let fahrenheit = f.toFixed(1);
  return parseFloat(fahrenheit);
};
console.log(convertToCelsius(100));
console.log(convertToFahrenheit(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
