const leapYears = function (year) {
    // check if the year is divisble by 4 and not divisble by 100 but also divisble by 400
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        return true
    }else{
        return false;
    }
    };
    console.log(leapYears(2004));
    // Do not edit below this line
    module.exports = leapYears;


// leap year are divisble 4
// if year is divisble by 100, then NOT leap year
// unless divisible by 400