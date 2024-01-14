// Get month number
'use strict';
const Months = [
  'jan',
  'feb',
  'mar',
  'apr',
  'may',
  'jun',
  'jul',
  'aug',
  'sep',
  'oct',
  'nov',
  'dec',
];

const month = (monthNum) => {
 let length = Months.length;
  for (let i = 0; i < length; i++) {
    if (monthNum.toLowerCase().startsWith(Months[i])) return i + 1;
  }
  return -1;
};

module.exports = month;
