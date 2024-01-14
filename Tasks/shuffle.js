// Shuffle an array
'use strict';
const shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
    return arr;
};

module.exports = shuffle;
