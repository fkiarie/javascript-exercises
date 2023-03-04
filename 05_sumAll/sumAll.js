const sumAll = function(num1, num2) {
    let sum = 0;
if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number'){
   return 'ERROR'
}else{
    // loops between the min to max number in the given inputes
    for(let i = Math.min(num1, num2); i<= Math.max(num1,num2); i++){ 
        
        sum +=i;
    }
    return sum;
}
};
//console.log(sumAll("FOO",8));
// Do not edit below this line
module.exports = sumAll;
