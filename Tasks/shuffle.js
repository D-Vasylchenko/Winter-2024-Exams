// Shuffle an array
'use strict';
let Shuffle = (...List) => {
  const [arr] = List;
  arr.sort(() => Math.random() - 0.5);
  {
    return arr;
  }
};

module.exports = Shuffle;
