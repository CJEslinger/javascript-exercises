const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 > 0 && num2 > 0) {
            if (num1 > num2) {
                return addBetween(num2, num1);
            }
            if (num2 > num1) {
                return addBetween(num1, num2);
            }
            else return num1;
        } else return 'ERROR';
    } else return 'ERROR';
};

function addBetween(smallNum, bigNum) {
    let finalNum = 0;
    for (let i = smallNum; i <= bigNum; i++) {
        finalNum += i;
    }
    return finalNum;
}

// Do not edit below this line
module.exports = sumAll;
