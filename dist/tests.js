import { getFloatPaddedOnRight_ifNeeded } from './index.js';
let num = getFloatPaddedOnRight_ifNeeded(0, 1);
if (num === '0.0')
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0, 2);
if (num === '0.00')
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0, 4);
if (num === '0.0000')
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0, 0);
if (num === '0')
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0.1, 0);
if (num === '0.1')
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0.1, 1);
if (num === '0.1')
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0.1, 2);
if (num === '0.10')
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
num = getFloatPaddedOnRight_ifNeeded(0.1, 4);
if (num === '0.1000')
    console.log('test 8 passed');
else
    console.log('test 8 FAILED');
num = getFloatPaddedOnRight_ifNeeded(10.01, 3);
if (num === '10.010')
    console.log('test 9 passed');
else
    console.log('test 9 FAILED');
num = getFloatPaddedOnRight_ifNeeded(10.01, 2);
if (num === '10.01')
    console.log('test 10 passed');
else
    console.log('test 10 FAILED');
num = getFloatPaddedOnRight_ifNeeded(10.001, 3);
if (num === '10.001')
    console.log('test 11 passed');
else
    console.log('test 11 FAILED');
num = getFloatPaddedOnRight_ifNeeded(10.001, 5);
if (num === '10.00100')
    console.log('test 12 passed');
else
    console.log('test 12 FAILED');
num = getFloatPaddedOnRight_ifNeeded(-10.001, 5);
if (num === '-10.00100')
    console.log('test 13 passed');
else
    console.log('test 13 FAILED');
