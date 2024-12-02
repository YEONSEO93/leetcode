// revert half of the number (e.g. 1221)

// 1. extract the last digit
// e.g. 1221 % 10 = 1

// 2. remove the last digit from the original
// e.g. 1221 // 10 = 122

// 3. add the extracted digit to the reversed num
// e.g. Extract 1 → reversed_number = 0 * 10 + 1 = 1
//      Extract 2 → reversed_number = 1 * 10 + 2 = 12

// edge case 1. negative numbers - false
// edge case 2. leading zero (except 0 itself) - false
// edge case 3. single digit - true
// edge case 4. even


var isPalindrome = function (x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
      return false;
    }

    let revertedNum = 0;
    while (x > revertedNum) {
      revertedNum = revertedNum * 10 + (x % 10); 
      // Add the last digit to revertedNumber
      // e.g. x = 123
      // 1. x % 10 = 3 -> Last digit is 3
      // 2. revertedNum = revertedNum * 10 + 3 -> 0 * 10 + 3 = 3
        x = Math.floor(x / 10); 
        // Remove the last digit from x
        // 3. Update x: x = Math.floor(x / 10) -> Math.floor(123 / 10) = 12
    }
    return x === revertedNum || x === Math.floor(revertedNum / 10);
    // even-length || odd
  };