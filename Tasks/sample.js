// Get one random element from an array
'use strict';
const sample = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

module.exports = sample;
