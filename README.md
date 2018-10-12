This function appends zeros to the end of a float, if needed.
You simply tell it how many digits you need to appear after the decimal, 
and it adds the required number of zeros.  If the number already has the 
required number of digits, the function does nothing.  If the number has 
more than the required number of digits, the function does nothing.

getFloatPaddedOnRight_ifNeeded(11, 1); // --> 11.0

getFloatPaddedOnRight_ifNeeded(11.1, 2); // --> 11.10

getFloatPaddedOnRight_ifNeeded(11.1556, 3); // --> 11.1556
