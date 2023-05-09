// "{[()]}}[]" "{}{}[][()]" "{{(}}[]" 

// create map of open v close
// create array to track order
// if 
// iterate
// if open, add close to array
// if close, check last item in array
// - not equal, return false
// - equal, continue

const pairMap = {
  '{': '}',
  '(': ')',
  '[': ']'
}

function isBalanced(str) {
  if (str.length == 0) return true; 
  if (str.length == 1) return false;

  return checkString(str);
}

function checkString(str) {
  const order = [];
  const keys = Object.keys(pairMap);

  for (let i = 0; i < str.length; i++) {
    let curr = str.charAt(i);
    if (keys.indexOf(curr) > -1) {
      order.push(pairMap[curr]);
    } else {
      if (order.pop() != curr) return false;
    }
  }
  return true;
}

console.log(isBalanced("{[()]}}[]"));
console.log(isBalanced("{}{}[][()]"));
console.log(isBalanced("{{(}}[]"));