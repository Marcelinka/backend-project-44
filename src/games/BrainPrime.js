import Game from './Game.js';
import getRandomInt from '../helpers/getRandomInt.js';
import isPrimeNumber from '../helpers/isPrimeNumber.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const PRIME_ANSWER = 'yes';
const NOT_PRIME_ANSWER = 'no';

export default class BrainCalc extends Game {
  constructor() {
    super();

    this.startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

    this.getQuestion = () => {
      const number = getRandomInt(MIN_NUMBER, MAX_NUMBER);
      const rightAnswer = isPrimeNumber(number) ? PRIME_ANSWER : NOT_PRIME_ANSWER;

      return {
        text: String(number),
        rightAnswer,
      };
    };
  }
}
