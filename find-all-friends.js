/**
 * a has friends [b, c]
 * b -> [d, g]
 * d -> [p, q]
 * l -> [x, y]
 */
console.time('Execution Time');
const friendMap = {
  'a': ['b', 'c'],
  'b': ['d', 'g'],
  'd': ['p', 'q'],
  'l': ['x', 'y'],
}

// accepts a 'friend'
// lookup friend in friendMap
// iterate over value
// recursively look into map
// build temp list
// push into result
const findAllFriends = (friend) => {
  const result = [];

  if (friendMap.hasOwnProperty(friend)) {
    // base case
    result.push(...friendMap[friend])

    for (friendsFriend of friendMap[friend]) {
      let tempResult = [];
      if (friendMap.hasOwnProperty(friendsFriend)) {
        tempResult = findAllFriends(friendsFriend)
      }

      result.push(...tempResult);
    }
  }
  
  return result;
}

console.log(findAllFriends('l'));
console.timeEnd('Execution Time');
