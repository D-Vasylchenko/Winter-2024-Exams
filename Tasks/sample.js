// Get one random element from an array
'use strict';
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
module.exports = sample;
