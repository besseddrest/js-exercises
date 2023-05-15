const str = 'womens are wise and wants to do wise things in the following order';
const char = 'w'

function breakString(str, char) {
  let firstIndex, lastIndex;
  let results = [];

  for (let i = 0; i <= str.length; i++) {
    if (i === 0 && str.charAt(i) === char) {
      firstIndex = 0;
      continue;
    }

    if (str.charAt(i + 1) === char) {
      lastIndex = i;
      results.push(str.slice(firstIndex, lastIndex + 1).trim());
      firstIndex = lastIndex + 1;
      continue;
    }

    if (str.charAt(i + 1) === '') {
      results.push(str.slice(firstIndex));
      break;
    }
  }

  return results;
}

console.log(breakString(str, char));

