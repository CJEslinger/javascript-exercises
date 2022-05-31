const palindromes = function (str) {
    str = str.toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s/g, '');

    const arr = str.split('');
    arr.reverse();
    const newStr = arr.join('');
    console.log(`${newStr}\n${str}`);
    return newStr == str ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
