let arr;
let reverseArr;
const reverseString = function(string) {
    arr = string.split("");
    reverseArr = arr.reverse();
    return reverseArr.join("");
};

// Do not edit below this line
module.exports = reverseString;
