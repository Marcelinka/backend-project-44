import start from '../game-helpers/start.js';
import getRandomInt from '../helpers/getRandomInt.js';
import getGcd from '../helpers/getGcd.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

const startMessage = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => {
  const number1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
  const number2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

  const rightAnswer = String(getGcd(number1, number2));

  return {
    text: `${number1} ${number2}`,
    rightAnswer,
  };
};

export default start.bind(null, startMessage, getQuestion);
