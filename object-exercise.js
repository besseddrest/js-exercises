const person = {
  first: "Harold",
  last: "Cabalic",
}
const twin1 = person;
person.first = "Quintin";
twin1.first = "Shoshanna";
// console.log(twin1.first); // Shoshanna
// console.log(person.first); // Shoshanna

// Takeaway:
// const twin1 = person is a pointer to the same object in memory
// changes to the source will affect the pointer

let first = person.first;
let last = person.last;
console.log(first + ' ' + last); // Shoshanna Cabalic

person.first = last;
person.last = first;
console.log(first + ' ' + last); // Shoshanna Cabalic
console.log(person.first + ', ' + person.last); // Cabalic, Shoshanna

// Takeaway:
// let first = person.first is a reference to a string value, not an object in memory
// 

last = "Quintin";
console.log(person.first); // Cabalic

// Takeaway:
// the string var value can change, person.first is not a pointer to the string var last