const leapYears = function(year) {
    const centuryYear = checkCenturyYear(year);
    if (!centuryYear) {
        return checkIfDivBy4(year);
    } else return centuryIsLeap(year);
};

function checkCenturyYear(num) {
    if (num % 100 == 0) {
        return true;
    } else return false;
}

function checkIfDivBy4(num) {
    if (num % 4 == 0) {
        return true;
    } else return false;
}

function centuryIsLeap (num) {
    num /= 100
    return checkIfDivBy4(num);
}
// Do not edit below this line
module.exports = leapYears;
