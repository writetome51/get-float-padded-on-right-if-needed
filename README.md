# getFloatPaddedOnRight_ifNeeded(num, numDigitsNeededAfterDecimal): string

Appends zeros to end of `num` so it has required `numDigitsNeededAfterDecimal`.  
If `num` already has or exceeds the required number of digits, the function   
returns `num` unchanged.  It does not round or trim `num`.

## Examples

getFloatPaddedOnRight_ifNeeded(11, 1); // --> '11.0'

getFloatPaddedOnRight_ifNeeded(11.1, 2); // --> '11.10'

getFloatPaddedOnRight_ifNeeded(11.1556, 3); // --> '11.1556'

getFloatPaddedOnRight_ifNeeded(11, 0); // --> '11'