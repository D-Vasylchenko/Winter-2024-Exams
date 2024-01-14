// Sum all numbers from an array
'use strict'
const sum = (arr) => {
    let sum = 0;
    for (const element of arr) {
        if (typeof element === 'number') {
            sum += element;
        }
    }
    return sum;
};
module.exports = sum;
