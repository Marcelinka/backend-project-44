const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

function getRandomInt() {
  return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
}

export default function getBrainEvenQuestion() {
  const number = getRandomInt();
  const isEven = number % 2 === 0;
  const rightAnswer = isEven ? EVEN_ANSWER : ODD_ANSWER;

  return {
    text: String(number),
    rightAnswer,
  };
}
