"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_zero_or_greater_1 = require("error-if-not-integer-zero-or-greater");
var error_if_not_finite_number_1 = require("error-if-not-finite-number");
var is_integer_is_float_1 = require("@writetome51/is-integer-is-float");
var get_right_of_decimal_1 = require("@writetome51/get-right-of-decimal");
var get_left_of_decimal_1 = require("@writetome51/get-left-of-decimal");
// Appends zeros to end of num until num has required numDigitsNeededAfterDecimal.
// The function does not trim any digits off if num already has or exceeds
// numDigitsNeededAfterDecimal.
function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal) {
    error_if_not_finite_number_1.errorIfNotFiniteNumber(num);
    error_if_not_integer_zero_or_greater_1.errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);
    var fraction = '';
    if (is_integer_is_float_1.isFloat(num)) {
        fraction = get_right_of_decimal_1.getRightOfDecimal(num);
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
