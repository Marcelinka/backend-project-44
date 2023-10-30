import greet from './helpers/greet.js';
import playRound from './helpers/playRound.js';
import showEndMessage from './helpers/showEndMessage.js';

/**
 * @typedef {Object} GetQuestionReturn
 * @property {string} text - текст вопроса
 * @property {string} rightAnswer - правильный ответ на вопрос
 */

/**
 * @typedef GetQuestionType
 * @type {function}
 * @returns {GetQuestionReturn} - вопрос с ответом
 */

/**
 * @param {object} options - опции игры
 * @param {string} options.tip - подсказка перед игрой
 * @param {GetQuestionType} options.getQuestion - функция для получения данных вопроса
 */
export default function start(options) {
  const name = greet();

  console.log(options.tip);

  let isVictory = true;

  for (let i = 0; i < 3; i += 1) {
    const round = options.getQuestion();
    const result = playRound(round.text, round.rightAnswer);

    if (!result) {
      isVictory = false;
      break;
    }
  }

  showEndMessage(isVictory, name);
}
