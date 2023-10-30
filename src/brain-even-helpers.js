import readlineSync from 'readline-sync';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

function getRandomInt() {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
}

export function showGameTip() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

export function playRound() {
  const number = getRandomInt();
  const isEven = number % 2 === 0;
  const rightAnswer = isEven ? EVEN_ANSWER : ODD_ANSWER;

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
}

export function showEndMessage(isVictory, name) {
  if (isVictory) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  console.log(`Let's try again, ${name}!`);
}
