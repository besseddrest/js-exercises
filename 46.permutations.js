/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// backtracking example
// start at easiest permutation (aka 1) and recursively return it to the remaining numbers
// note: Array.concat() does not modify original!!!!
var permute = function(nums) {
  const result = [];

  // base case
  if (nums.length == 1) return [nums.slice()];

  for (let i = 0; i < nums.length; i++) {
    const num = nums.shift();

    // recursion
    const perms = permute(nums);
    for (let perm of perms) {
      perm.push(num);
    }

    result.push(...perms);
    nums.push(num);
  }

  return result;
};

console.log(permute([1,2,3]));