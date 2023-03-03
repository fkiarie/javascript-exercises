const reverseString = function (string) {
    let stringArray = string.split(""); // split the string and make it an array
    const revArray= stringArray.reverse(); // reverse the array
    const results = revArray.join(""); // join the reversed array
    return results;



};
console.log(reverseString("hello there"));

// Do not edit below this line
module.exports = reverseString;
