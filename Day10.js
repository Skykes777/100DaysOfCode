"use strict"

function ArvoreBinaria(num = 0) {
    if (num <= 0 || num > 19) {
        console.log('Insira um número de 1 a 19!');
    } else {
        let res = 1;
        for (let i = 0; i < num; i++) {
            res = res * 2 * (2 * i + 1) / (i + 2);
        };
        return res;
    }
};

console.log(ArvoreBinaria(3));