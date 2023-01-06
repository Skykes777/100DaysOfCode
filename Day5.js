"use strict"

function contarParesMeias(meias) {
    let contPar = 0;
    let paresMeias = [];
    // primeiro for percorre as meias
    for (let c = 0; c < meias.length; c++) {
        let meia = meias[c];
        let cont = 0;
        // teste para verifica se a meia já não está na lista de pares de meias
        if (paresMeias.indexOf(meia) == -1) {
            // segundo for percorre todas as meias e verifica se tem uma igual
            for (let m = 0; m < meias.length; m++) {
                if (meia == meias[m]) {
                    cont++;
                    if (cont % 2 == 0) {
                        contPar++;
                    }
                }
            }
            paresMeias.push(meia);
        }
    }
    console.log(contPar);
}

contarParesMeias('CABBACCCA'); // 4
contarParesMeias('ABABCA'); // 2
contarParesMeias('AA'); // 1
contarParesMeias('AB'); // 0
contarParesMeias(''); // 0