// each row = 1 array
// iterate over string
// at each index, push the next letter of string into ea row at index
// - odd row + even index = letter
// - odd row + odd index = blank
// - even row at index = letter
// when we've processed entire string, return new string

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const resultArr = Array(3).fill([]);
  let index = 0;

  while (index < s.length) {
    let char = s.charAt(index);
    console.log(resultrr);
    if (index % 2 == 0) { // even index
      resultArr[0].push(char);
      resultArr[1].push(s[index + 1] !== 'undefined' ? s.charAt(index + 1) : '');
      resultArr[2].push(s[index + 2] !== 'undefined' ? s.charAt(index + 2) : '');
      index = index + 3;
    } else { // odd index
      resultArr[1].push(char);
      index++;
    }
  }

  // console.log(resultArr);
  // let resultFlat = resultArr.concat(...resultArr).join('');
  return resultArr;
};

console.log(convert('PAYPALISHIRING', 3));
// console.log(0 % 2);
// console.log(1 % 2);
// console.log(2 % 2);