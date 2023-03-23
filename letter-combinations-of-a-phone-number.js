/**
 * @param {string} digits
 * @return {string[]}
 * time = O(n^2)-ish?
 * space = ? 
 */
var letterCombinations = function(digits) {
  if (digits.length == 0) return [];
  const result = [''];
  const charMap = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  for (let i = 0; i < digits.length; i++) {
    const letters = charMap[parseInt(digits[i])].split('');
    while (result[0].length == i) {
      const permutation = result.shift();
      for (const letter of letters) {
        result.push(permutation + letter);
      }
    }
  }

  return result;
};

console.log(letterCombinations("23"));