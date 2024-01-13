// Generate random password
'use strict';
const GeneratePassword = (alphabet, length) => {
    const maxPass = alphabet.length;
    let key = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * maxPass);
        key += alphabet[index];
    }
    return key;
};

module.exports = GeneratePassword;

