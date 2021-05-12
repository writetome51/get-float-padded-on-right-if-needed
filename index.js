import {errorIfNotIntegerZeroOrGreater} from 'error-if-not-integer-zero-or-greater';
import {isFloat} from '@writetome51/is-integer-is-float';
import {toStr} from '@writetome51/to-str';


// Appends zeros to end of `num` until `num` has required `numDigitsNeededAfterDecimal`.
// Does not trim any digits off if `num` already has or exceeds `numDigitsNeededAfterDecimal`.

export function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal) {
	errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);

	let fraction = '';
	if (isFloat(num))  [num, fraction] = toStr(num).split('.');

	for (var fracLength = fraction.length; fracLength < numDigitsNeededAfterDecimal; ++fracLength) {
		fraction += '0';
	}
	return (fracLength > 0 ? (toStr(num) + '.' + fraction) : toStr(num));
}
