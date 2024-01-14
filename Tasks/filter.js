// Filter array by type name
'use strict';
const filter = (arr, type) => {
    const removed = [];
    for (const element of arr) {
        const current = arr.indexOf(element);
        if (typeof arr[current] !== type) {
            removed.unshift(current);
        }
    }
    for (const element of removed) arr.splice(element, 1);
    return arr;
};

module.exports = filter;
