// vertical scanning
var findCommonPrefix = function(words) {
    if (words == null || words.length === 0) return ""; 

    for (let col = 0; col < words[0].length; col++) { 
        let currentChar = words[0][col]; 
        // Get the character at the current position.
        // e.g. currentChar = 'f' -> compare 'f' with "flow"[0] = 'f' => match
        // All words have 'f' at the Nth position => continue
        
        for (let row = 1; row < words.length; row++) { 
          // Compare with other words.
            if (col === words[row].length || words[row][col] !== currentChar) {
                // Stop if:
                // - Reached the end of a word
                // - Characters don’t match
                return words[0].slice(0, col); 
            }
        }
    }

    return words[0]; 
};

// e.g. 
// column 0: Compare 'd':
// "dog"[0] = 'd' -> Match
// "dodge"[0] = 'd' -> Match
// "do"[0] = 'd' -> Match
// all match -> continue

// column 1 : Compare 'o':
// "dog"[1] = 'o' -> Match
// "dodge"[1] = 'o' -> Match
// "do"[1] = 'o' -> Match
// all match -> continue

// column 2 : Compare 'g':
// "dog"[2] = 'g' -> Match
// "dodge"[2] = 'g' -> Mismatch
// stop -> return the prefix up to column2 ("do")


// Time Complexity: O(S)
// Worst case: O(S) -> S = n x m (total characters in all strings)
// Best case: O(n x minLen) -> minLen is the length of the shortest string

// Space Complextity: O(1)
// fixed memory