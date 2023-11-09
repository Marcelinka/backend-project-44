import Game from './Game.js';
import getRandomInt from '../helpers/getRandomInt.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const EVEN_ANSWER = 'yes';
const ODD_ANSWER = 'no';

export default class BrainCalc extends Game {
  startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

  // eslint-disable-next-line class-methods-use-this
  getQuestion = () => {
    const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
    const isEven = number % 2 === 0;
    const rightAnswer = isEven ? EVEN_ANSWER : ODD_ANSWER;

    return {
      text: String(number),
      rightAnswer,
    };
  };
}
