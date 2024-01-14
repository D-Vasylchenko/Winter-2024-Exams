// Generate random integer value in given range
'use strict';
const random = (min, max = min) => {
    const randNum = Math.random();
    const scaledNum = randNum * (max - min + 1);
    const floorNum = Math.floor(scaledNum);
    const finalNum = min + floorNum;
    return finalNum;
};

module.exports = random;
