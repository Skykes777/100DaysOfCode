"use strict"

const dias1 = [10, 11, 12, 9, 10];
const dias2 = [9, 9];

const diasProgresso = (dc) => {
    let dia = dc[0];
    let excedido = 0;
    dc.map(n => {
        if (dia < n) {
            excedido++;
        }
        dia = n;
    });
    console.log(excedido);
};

diasProgresso(dias1);
diasProgresso(dias2);