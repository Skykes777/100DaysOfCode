"use strict"

function trappingRainWater(hr) {
    if (hr.some((n) => n < 0)) {
        console.log('o valor da altura não pode ser negativo');
    } else if (hr.some((n) => isNaN(n))) {
        throw new Error('o parametro passado não é um número');
    } else {
        let agua = 0;
        for (let c = 0; c < hr.length; c++) {
            let pEsquerda = 0;
            let pDireita = 0;

            for (let e = c; e >= 0; e--) {
                if (hr[e] > pEsquerda) {
                    pEsquerda = hr[e];
                }
            }

            for (let d = c; d < hr.length; d++) {
                if (hr[d] > pDireita) {
                    pDireita = hr[d];
                }
            }

            const aguaCheia = pEsquerda > pDireita ? pDireita : pEsquerda;
            agua += aguaCheia - hr[c];
        }
        return agua;
    }
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

console.log(trappingRainWater(height));