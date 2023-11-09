import Game from './Game.js';
import getRandomInt from '../helpers/getRandomInt.js';
import getGcd from '../helpers/getGcd.js';

const MIN_NUMBER = 2;
const MAX_NUMBER = 100;

export default class BrainCalc extends Game {
  startMessage = 'Find the greatest common divisor of given numbers.';

  // eslint-disable-next-line class-methods-use-this
  getQuestion = () => {
    const number1 = getRandomInt(MIN_NUMBER, MAX_NUMBER);
    const number2 = getRandomInt(MIN_NUMBER, MAX_NUMBER);

    const rightAnswer = String(getGcd(number1, number2));

    return {
      text: `${number1} ${number2}`,
      rightAnswer,
    };
  };
}
