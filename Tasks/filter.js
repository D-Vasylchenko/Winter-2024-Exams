// Filter array by type name
'use strict';
const filter = (arr, type) => {
    const filtered = [];
    for (const element of arr) {
        if (typeof element === type) {
            filtered.push(element);
        }
    }
    return filtered;
};

module.exports = filter;
