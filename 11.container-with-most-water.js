/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function(height) {
  let maxVol = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  while (leftPointer < rightPointer) {
    const space = rightPointer - leftPointer;
    console.log(space);
    if (height[leftPointer] < height[rightPointer]) {
      maxVol = Math.max(maxVol, height[leftPointer] * space);
      leftPointer++;
    } else {
      maxVol = Math.max(maxVol, height[rightPointer] * space);
      rightPointer--;
    }
  }

  return maxVol;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));