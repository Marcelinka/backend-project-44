import Game from './Game.js';
import getRandomInt from '../helpers/getRandomInt.js';

const START_MIN_NUMBER = 1;
const START_MAX_NUMBER = 20;

const DIFF_MIN_NUMBER = 1;
const DIFF_MAX_NUMBER = 10;

const MISS_MIN_NUMBER = 0;
const MISS_MAX_NUMBER = 9;

export default class BrainCalc extends Game {
  startMessage = 'What number is missing in the progression?';

  // eslint-disable-next-line class-methods-use-this
  getQuestion = () => {
    const start = getRandomInt(START_MIN_NUMBER, START_MAX_NUMBER);
    const diff = getRandomInt(DIFF_MIN_NUMBER, DIFF_MAX_NUMBER);

    const progression = [start];
    for (let i = 1; i < 10; i += 1) {
      const prev = progression[i - 1];
      progression.push(prev + diff);
    }

    const missIndex = getRandomInt(MISS_MIN_NUMBER, MISS_MAX_NUMBER);
    const rightAnswer = String(progression[missIndex]);
    progression[missIndex] = '..';

    return {
      text: progression.join(' '),
      rightAnswer,
    };
  };
}
