import greet from './greet.js';
import playRound from './playRound.js';
import showEndMessage from './showEndMessage.js';

export default function start(startMessage, getQuestion) {
  const name = greet();

  console.log(startMessage);

  let isVictory = true;

  for (let i = 0; i < 3; i += 1) {
    const round = getQuestion();
    isVictory = playRound(round.text, round.rightAnswer);

    if (!isVictory) {
      break;
    }
  }

  showEndMessage(isVictory, name);
}
