// Note:
// findRabbit() and findRabbit2() aren't correct solutions because we are checking
// against the rabbit's current location
// we should never know the rabbits location until we guess correctly
// so actual solution is do naive pass starting at 0 and
// if not found a second naive pass starting at 1

function findRabbit(guess) {
  let newGuess = guess;
  let rabbitPos = generateRandom(99);

  for (let i = 0; i < 100; i++) {
    if (newGuess === rabbitPos) {
      console.log('You caught the rabbit in ' + i + ' steps!');
      break;
    }

    // if rabbit is 'cornered', guess should be adjacent step
    if (rabbitPos === 99 || rabbitPos === 0) {
      newGuess = rabbitPos === 99 ? 98 : 1;
    } else {
      // calculate distance from current guess to rabbitPos, next guess is half that distance
      let isRabbitInFront = (rabbitPos - newGuess) > 0 ? true : false;
      let distance = Math.abs(rabbitPos - newGuess);

      // if far, guess halfway toward rabbit
      if (distance > 2) {
        let jump = Math.round(distance / 2);
        newGuess = isRabbitInFront 
          ? newGuess + jump
          : newGuess - jump
      }
      
      // if close, move to either side of rabbit
      if (distance === 2) {
        newGuess = Math.random() > 0.5 ? rabbitPos + 1 : rabbitPos - 1;
      }

      // if adjacent, stay in place or pick one after rabbit
      if (distance === 1) {
        newGuess = Math.random() > 0.5 ? newGuess : (isRabbitInFront ? rabbitPos + 1 : rabbitPos - 1);
      }

      console.log("New guess is ", newGuess);
      rabbitPos = moveRabbit(rabbitPos);
      console.log("Rabbit jumps to ", rabbitPos);
    }
  }
}

function moveRabbit(pos) {
  if (pos === 0) {
    return 1;
  }
  
  if (pos === 99) {
    return 98;
  }

  return (Math.random() > 0.5) ? pos + 1: pos - 1;
}

function generateRandom(max) {
  return Math.floor(Math.random() * max);
}

function findRabbit2(guess) {
  let newGuess = guess;
  let rabbitPos = generateRandom(99);

  for (let i = 0; i < 100; i++) {
    if (newGuess === rabbitPos) {
      console.log('You caught the rabbit in ' + i + ' steps!');
      break;
    }

    // if rabbit is 'cornered', guess should be adjacent step
    if (rabbitPos === 99 || rabbitPos === 0) {
      newGuess = rabbitPos === 99 ? 98 : 1;
    } else {
      newGuess = (rabbitPos % 2 === 1) ? rabbitPos + 1 : rabbitPos - 1;
    }

    console.log("New guess is ", newGuess);
    rabbitPos = moveRabbit(rabbitPos);
    console.log("Rabbit jumps to ", rabbitPos);
  }
}

findRabbit2(46);