var dad = "Harold Cabalic";
var thing = 46;

function printStuff() {
  const dad = "Solomon";
  thing++;
  console.log(thing);
  let thing = 40;
  console.log(thing);

  function inside() {
    let dad = "Merle";
    console.log(dad);
  }

  inside();
}

const printThings = () => {
  console.log(dad);
}

printStuff(dad);
printThings(dad);