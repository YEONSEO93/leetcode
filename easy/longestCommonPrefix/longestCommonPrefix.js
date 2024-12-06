var findCommonPrefix = function(words) {
    if (words.length === 0) return ""; 
    // If there are no words, return an empty string.

    let prefix = words[0];

    for (let i = 1; i < words.length; i++) { 
        while (!words[i].startsWith(prefix)) { 
          // Check if the word starts with the prefix.
          // e.g. prefix: "cat", word: "car" -> "car.startWith("cat") is false

            prefix = prefix.slice(0, -1); 
            // Shorten the prefix by removing the last letter.
            // e.g. prefix: "cat" -> after slice(0,-1) -> "ca"
            
            if (prefix === "") return ""; 
            // If the prefix becomes empty, return no prefix.
        }
    }

    return prefix;
};

// Time Complexity : O(S)
// -> the number of comparisons depends on the total number of characters in all strings.
// 1) n = Number of strings in the list
// 2) k = Average length of each string
// 3) S = Total number of characters across all strings

// Space Complexity : O(1)
// -> constant space