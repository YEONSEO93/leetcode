var romanToInt = function (roman) {
    const valueMap = {
        I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
    };

    let total = valueMap[roman[roman.length - 1]]; 
    // e.g. "MCMXCIV" -> the last symbol is "V" => valueMap["V"] = 5
    // total = 5
    let prevValue = total;

    // Loop backward through the string, skipping the last character (already added)
    for (let i = roman.length - 2; i >= 0; i--) {
        let currentValue = valueMap[roman[i]]; // Get the current symbol's value
        // e.g. "MCMXCIV", roman[i] = "I" (2nd last character), valueMap["I"] = 1

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
        
    }

    return total;
};

// Time Complexity: O(1)
// The longest Roman numeral is 15 characters (for 3999) - > fixed
// Space Complexity: O(1)
// fixed set of values, no extra memory needed