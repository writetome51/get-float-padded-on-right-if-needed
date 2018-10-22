import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfNotNumber } from 'basic-data-handling/errorIfNotNumber';
import { isFloat } from 'basic-data-handling/isInteger_isFloat';
import { getRightOfDecimal } from '@writetome51/get-right-of-decimal';
import { getLeftOfDecimal } from '@writetome51/get-left-of-decimal';


// Appends zeros to end of num until num has required numDigitsNeededAfterDecimal.
// The function does not trim any digits off if num already has or exceeds
// numDigitsNeededAfterDecimal.

export function getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal): string {
	errorIfNotNumber(num);
	errorIfNotIntegerZeroOrGreater(numDigitsNeededAfterDecimal);
	let fraction = '';
	if (isFloat(num)) {
		fraction = getRightOfDecimal(num);
		num = getLeftOfDecimal(num);
	}
	while (fraction.length < numDigitsNeededAfterDecimal) fraction += '0';

	if (fraction.length > 0) return (String(num) + '.' + fraction);
	else return String(num);
}
