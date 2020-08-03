import {errorIfNotIntegerZeroOrGreater} from 'error-if-not-integer-zero-or-greater';
import {errorIfNotFiniteNumber} from 'error-if-not-finite-number';
import {isFloat} from '@writetome51/is-integer-is-float';
import {getRightOfDecimal} from '@writetome51/get-right-of-decimal';
import {getLeftOfDecimal} from '@writetome51/get-left-of-decimal';


// Appends zeros to end of num until num has required numDigitsNeededAfterDecimal.
// The function does not trim any digits off if num already has or exceeds
// numDigitsNeededAfterDecimal.

export function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal) {
	errorIfNotFiniteNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);

	let fraction = '';
	if (isFloat(num)) {
		fraction = getRightOfDecimal(num);
		num = getLeftOfDecimal(num);
	}
	while (fraction.length < numDigitsNeededAfterDecimal) fraction += '0';

	return (fraction.length > 0 ? (String(num) + '.' + fraction) : String(num));
}
