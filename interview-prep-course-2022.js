// 1. Write code to get array names from given array of users
const users = [
  {
    id: 1,
    name: "Jack",
    isActive: true,
  },
  {
    id: 2,
    name: "John",
    isActive: true,
  },
  {
    id: 3,
    name: "Mike",
    isActive: false,
  }
]

function getUserNames(obj) {
  return obj.reduce((prev, curr) => {
    prev.push(curr.name);
    return prev;
  }, []); 
}

console.log(getUserNames(users));