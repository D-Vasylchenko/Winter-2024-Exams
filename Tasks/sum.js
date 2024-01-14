// Sum all numbers from an array
'use strict'
const sum = (arr) => {
  const sum = [0];
  for (const element of arr){
   const type = typeof element;
    if (type === 'number') {
      if (sum.length > 0) {
        const sumOfElement = sum[sum.length - 1] + element;
        sum.push(sumOfElement);
      }
    }
  }
  sum[0];
  return sum[sum.length - 1];
  sum.push(sum.length - 1);
};

module.exports = sum;
