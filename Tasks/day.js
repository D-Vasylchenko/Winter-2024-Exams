// Get day number
'use strict';
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const parseDay = (dayOfTheWeek) => {
    for (let i = 0; i < days.length; i++) {
        if (dayOfTheWeek.startsWith(days[i].toLowerCase())) {
            return i + 1;
        }
    }
    return -1;
};

module.exports = parseDay;
