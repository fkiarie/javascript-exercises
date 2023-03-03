const repeatString = function (string, num) {
    let results = '';
    if(num>=0){
        for (let i = 0; i < num; i++) {
            results += string;
        }
        return results;
    }else{
        return "ERROR";
    }
   

};


//console.log(repeatString('hey',5));
// Do not edit below this line
module.exports = repeatString;
