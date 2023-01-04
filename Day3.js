"use strict"

const skewer1 = [
    "--xo--x--ox--",
    "--xx--x--xx--",
    "--oo--o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
];

const skewer2 = [
    "--oooo-ooo--",
    "--xx--x--xx--",
    "--o---o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
]

const verifySkewers = arr => {
    let nonVegetarianSkewers = 0;
    let vegetarianSkewers = 0;
    arr.map(ar => {
        if (ar.indexOf('x') != -1) {
            nonVegetarianSkewers++;
        } else {
            vegetarianSkewers++;
        }
    });
    return [vegetarianSkewers, nonVegetarianSkewers];
};

console.log(verifySkewers(skewer1));
console.log(verifySkewers(skewer2));