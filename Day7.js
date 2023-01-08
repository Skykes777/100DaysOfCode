"use strict"

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];

let novoArray = [...nums1, ...nums2].filter(i => i != 0).sort((a, b) => a - b);

console.log(novoArray);