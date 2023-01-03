"use strict"

let frase = 'À procura do Nemo'.split(' ');

console.log(frase.indexOf('Nemo') != -1 ?
    `O nemo foi encontrado na posição ${frase.indexOf('Nemo')}`
    :
    'O Nemo não foi encontrado ;('
);