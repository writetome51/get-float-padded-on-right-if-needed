"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getFloatPaddedOnRight_ifNeeded_1 = require("./getFloatPaddedOnRight_ifNeeded");
var num = 11;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 1);
console.log(num);
num = 11;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 2);
console.log(num);
num = 11;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 4);
console.log(num);
num = 11;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 0);
console.log(num);
num = 11.1;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 2); // 11.10
console.log(num);
num = 11.1;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 4);
console.log(num); // 11.1000
num = 11.15;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.150
num = 11.1556;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.1556
num = 11.15;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.150
num = 11.155;
num = getFloatPaddedOnRight_ifNeeded_1.getFloatPaddedOnRight_ifNeeded(num, 3);
console.log(num); // 11.155
