import Game from './Game.js';
import getRandomInt from '../helpers/getRandomInt.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 30;

const OPERATIONS_START = 0;
const OPERATIONS_END = 2;
const OPERATIONS = ['+', '-', '*'];

export default class BrainCalc extends Game {
  startMessage = 'What is the result of the expression?';

  // eslint-disable-next-line class-methods-use-this
  getQuestion = () => {
    const firstNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);
    const secondNumber = getRandomInt(MIN_NUMBER, MAX_NUMBER);

    const operationIndex = getRandomInt(OPERATIONS_START, OPERATIONS_END);
    const operation = OPERATIONS[operationIndex];

    const question = `${firstNumber} ${operation} ${secondNumber}`;
    // eslint-disable-next-line no-eval
    const result = eval(question);

    return {
      text: question,
      rightAnswer: String(result),
    };
  };
}
