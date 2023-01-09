"use strict"

function letras(num1 = null, num2 = null) {
    const numeros = [
        null,
        null,
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];

    let numero1 = numeros[num1];
    let numero2 = numeros[num2];

    if (num1 == 0 || num1 == 1 || num2 == 0 || num2 == 1) {
        console.log('[ERRO] os valores 0 e 1 não contem números!');
    } else if (num1 == null && num2 == null) {
        console.log('[ERRO] coloque valores!');
    } else if (num2 == null) {
        numero1.map(n => {
            console.log(n);
        });
    } else {
        numero1.map(n => {
            numero2.map(n2 => {
                console.log(`${n} ${n2}`);
            });
        });
    }
}

letras(2, 5);