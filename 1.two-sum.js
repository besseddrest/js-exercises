/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const partnerIndex = (diff != nums[i]) ? nums.indexOf(diff) : nums.lastIndexOf(diff);

    // if the index exists
    if (partnerIndex > -1) {
      if (partnerIndex != i) {
        return [i, partnerIndex];
      }
      // else it's the same index, continue
      continue;
    }
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3, 3], 6));
