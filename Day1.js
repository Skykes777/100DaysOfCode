"use strict"

const ageToDays = () => {
    const entrada = require('prompt-sync')({conf: true});
    let age = parseInt(entrada("Qual sua idade? "));
    if (Number.isInteger(age)) {
        return `\x1b[32mVocê tem ${age} e viveu ${age*365} dias.`;
    } else {
        return `\x1b[31m[ERRO] O valor passado como parametro não é um número inteiro!`;
    }
};

console.log(ageToDays());