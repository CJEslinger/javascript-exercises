const ftoc = function(tempF) {
  const tempC = (tempF - 32) * (5/9);
  return roundNum(tempC);
};

const ctof = function(tempC) {
  const tempF = (tempC * (9/5)) +32
  return roundNum(tempF);
};

function roundNum (num) {
  const roundedNum = Math.round(num * 10) / 10;
  const fixed = roundedNum.toFixed(1);
  return parseFloat(fixed);
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
