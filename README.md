# getFloatPaddedOnRight_ifNeeded(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;num,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;numDigitsNeededAfterDecimal<br>): string

Appends zeros to end of `num` so it has required `numDigitsNeededAfterDecimal`, if needed.  
If `num` already has or exceeds `numDigitsNeededAfterDecimal`, the function   
returns `num` unchanged.  It does not round or trim `num`.

## Examples
```js
getFloatPaddedOnRight_ifNeeded(11, 1);
    // --> '11.0'

getFloatPaddedOnRight_ifNeeded(11.1, 2);
    // --> '11.10'

getFloatPaddedOnRight_ifNeeded(11.1556, 3);
    // --> '11.1556'

getFloatPaddedOnRight_ifNeeded(11, 0);
    // --> '11'
```

## Installation
`npm i  @writetome51/get-float-padded-on-right-if-needed`


## Loading
```js
import { getFloatPaddedOnRight_ifNeeded } 
    from '@writetome51/get-float-padded-on-right-if-needed';
```