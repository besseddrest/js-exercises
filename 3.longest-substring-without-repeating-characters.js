/**
 * @param {string} s
 * @return {number}
 * 
 * Runtime: 94.58%
 * Memory: 84.57%
 */
var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  const letters = [];

  for (let i = 0; i < s.length; i++) {
      let letter = s[i];
      let existingIndex = letters.indexOf(letter);

      // if the letter already exists
      if (letters.indexOf(letter) !== -1) {
          // chop off the string up to that letter
          letters.splice(0, existingIndex + 1);
      }

      // add this letter to letters
      letters.push(letter);

      longestSubstring = Math.max(longestSubstring, letters.length);
  }

  return longestSubstring;
};