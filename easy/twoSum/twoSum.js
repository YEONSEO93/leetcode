// Brute Force
// Loop through each element x 
// -> find if there is another value that equals to target -x\

var twoSum = function (nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i+1; j <=nums.length; j++) {
      if (nums[j] === target- nums[i]) {
        return [i, j];
      }
    }
  }
  return [];
}

// Time complexity: O(n2)
// Space complexity: O(1).

//

// Two-pass Hash Table (dictionary)
// two iterations
// 1st -> index in the list {2: 0, 7: 1, 11: 2, 15: 3}
// 2nd -> go through the list again

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i<nums.length; i++) {
    const pair = target - nums[i];
    if (map.has(pair) && map.get(pair) !==i) {
      return [i, map.get(pair)];
    }
  }
  return [];
};

// Time complexity: O(n)
// -> loop through the array twice O(n) + O(n)
// Space complexity: O(n)
// -> map stores all the numbers & indexes
