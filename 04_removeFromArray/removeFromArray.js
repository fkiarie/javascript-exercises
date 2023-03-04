const removeFromArray = function (mainArray, ...args) {
   // assign the array in argument to a newArray
    let newArray = [...mainArray]; 
     // loop through the arg checking for given element to delete
   for(let i=0; i < args.length; i++){ 
   // loop the args removing the matching element. 
    newArray = newArray.filter(element => element !== args[i]); 
   }
   return newArray;

};
const anArray = [3,4,5,6,7,8,9];
console.log(removeFromArray(anArray, 9));
// Do not edit below this line
module.exports = removeFromArray;
