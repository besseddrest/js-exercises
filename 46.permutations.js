/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking example
// start at easiest permutation (aka 1) and recursively return it to the remaining numbers
var permute = function(nums) {
  const result = [];

  // base case
  if (nums.length == 1) return [Array.from(nums)];

  for (let i = 0; i < nums.length; i++) {
    const num = nums.pop(0);

    // recursion
    const perms = permute(nums);

    for (let perm of perms) {
      perm.push(num);
    }

    result.concat(perms);
    nums.push(num);
  }

  return result;
};

console.log(permute([1,2,3]));