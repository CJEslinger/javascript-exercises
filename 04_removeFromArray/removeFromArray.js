
const removeFromArray = function(...arguements) {
    const array = arguements[0]
    const newArray = []
    array.forEach(element => {
        if (!arguements.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
