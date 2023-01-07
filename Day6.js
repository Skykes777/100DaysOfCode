"use strict"

const nextPrime = num => {
    while (true) {
        let contDiv = 0;

        for (let c = 1; c <= num; c++) {
            if (num % c == 0) {
                contDiv++;
            }
        }
        if (contDiv == 2) {
            return num;
        } else {
            num++;
            continue;
        }
    }
};

console.log(nextPrime(12));
console.log(nextPrime(24));
console.log(nextPrime(11));