const add = function(a,b) {
	const result = a+b;
  return result;
};

const subtract = function(a,b) {
	const result = a-b;
  return result;
};

const sum = function (array) {
 return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
return array.reduce((acc, current) => acc * current);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n === 1 || n === 0){
    return 1;
  }else{
    return n * factorial(n-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
