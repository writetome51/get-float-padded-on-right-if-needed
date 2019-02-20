"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var num = 11;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 1);
console.log(num);
num = 11;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 2);
console.log(num);
num = 11;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 4);
console.log(num);
num = 11;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 0);
console.log(num);
num = 11.1;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 2); // 11.10
console.log(num);
num = 11.1;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 4);
console.log(num); // 11.1000
num = 11.15;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.150
num = 11.1556;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.1556
num = 11.15;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.150
num = 11.155;
num = index_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.155
