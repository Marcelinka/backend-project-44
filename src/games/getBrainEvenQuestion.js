import getRandomInt from '../helpers/getRandomInt.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

export default function getBrainEvenQuestion() {
  const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const isEven = number % 2 === 0;
  const rightAnswer = isEven ? EVEN_ANSWER : ODD_ANSWER;

  return {
    text: String(number),
    rightAnswer,
  };
}
