// I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1000
// Loop through the string
// If the current value < next value, -> add their difference and skip two symbols
// Otherwise, add the current value & move to the next one.
// *** Not the most optimal solution, there's room for improvement!!! ***

let romanValues = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000,
    IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900,
};

var romanToInt = function (roman) {
    let result = 0; 
    let index = 0;

    while (index < roman.length) {
        // Check for two-character case (e.g., IV, IX)
        if (index < roman.length - 1 && roman.substring(index, index + 2) in romanValues) {
            result += romanValues[roman.substring(index, index + 2)];
            
            index += 2;
            // Move past the two characters
        } else {
            result += romanValues[roman[index]];
            index++;
        }
    }
    return result;
};

// time complexity : O(1)
// space complexity : O(1)