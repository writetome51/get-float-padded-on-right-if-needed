import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { isFloat } from '@writetome51/is-integer-is-float';
import { getRightOfDecimal } from '@writetome51/get-right-of-decimal';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';
import { toStr } from '@writetome51/to-str';


// Appends zeros to end of `num` until `num` has required `numDigitsNeededAfterDecimal`.
// Does not trim any digits off if `num` already has or exceeds `numDigitsNeededAfterDecimal`.

export function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal): string {
	errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);

	let fraction = '';
	if (isFloat(num))  [num, fraction] = [getLeftOfDecimal(num), getRightOfDecimal(num)];

	for (var fracLength = fraction.length; fracLength < numDigitsNeededAfterDecimal; ++fracLength) {
		fraction += '0';
	}
	return (fracLength > 0 ? (toStr(num) + '.' + fraction) : toStr(num));
}
