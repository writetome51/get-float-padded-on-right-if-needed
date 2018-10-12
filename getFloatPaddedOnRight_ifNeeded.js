"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var errorIfNotNumber_1 = require("basic-data-handling/errorIfNotNumber");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var getRightOfDecimal_1 = require("@writetome51/get-right-of-decimal/getRightOfDecimal");
var get_left_of_decimal_1 = require("@writetome51/get-left-of-decimal");
// Appends zeros to end of num until num has required numDigitsNeededAfterDecimal.
// The function does not trim any digits off if num already has or exceeds
// numDigitsNeededAfterDecimal.
function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal) {
    errorIfNotNumber_1.errorIfNotNumber(num);
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);
    var fraction = '';
    if (isInteger_isFloat_1.isFloat(num)) {
        fraction = getRightOfDecimal_1.getRightOfDecimal(num);
        num = get_left_of_decimal_1.getLeftOfDecimal(num);
    }
    while (fraction.length < numDigitsNeededAfterDecimal)
        fraction += '0';
    if (fraction.length > 0)
        return (String(num) + '.' + fraction);
    else
        return String(num);
}
exports.getFloatPaddedOnRight_ifNeeded = getFloatPaddedOnRight_ifNeeded;
