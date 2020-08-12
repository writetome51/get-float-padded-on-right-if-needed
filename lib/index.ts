import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { errorIfNotFiniteNumber } from 'error-if-not-finite-number';
import { isFloat } from '@writetome51/is-integer-is-float';
import { getRightOfDecimal } from '@writetome51/get-right-of-decimal';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';


// Appends zeros to end of `num` until `num` has required `numDigitsNeededAfterDecimal`.
// Does not trim any digits off if `num` already has or exceeds `numDigitsNeededAfterDecimal`.

export function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal): string {
	errorIfNotFiniteNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);

	let fraction = '';
	if (isFloat(num)) [num, fraction] = getSeparatedAtDecimal(num);

	let fracLength = fraction.length;
	while (fracLength < numDigitsNeededAfterDecimal) {
		fraction += '0';
		++fracLength;
	}
	return (fracLength > 0 ? (String(num) + '.' + fraction) : String(num));


	function getSeparatedAtDecimal(num) {
		return [getLeftOfDecimal(num), getRightOfDecimal(num)];
	}

}
