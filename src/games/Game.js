import readlineSync from 'readline-sync';

export default class Game {
  name = '';

  startMessage = '';

  // eslint-disable-next-line class-methods-use-this
  getQuestion = () => ({ text: '', rightAnswer: '' });

  isVictory = true;

  greet() {
    console.log('Welcome to the Brain Games!');
    this.name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.name}!`);
  }

  playRound(question, rightAnswer) {
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      return;
    }

    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    this.isVictory = false;
  }

  showEndMessage() {
    if (this.isVictory) {
      console.log(`Congratulations, ${this.name}!`);
      return;
    }

    console.log(`Let's try again, ${this.name}!`);
  }

  start() {
    this.greet();

    console.log(this.startMessage);

    for (let i = 0; i < 3; i += 1) {
      const round = this.getQuestion();
      this.playRound(round.text, round.rightAnswer);

      if (!this.isVictory) {
        break;
      }
    }

    this.showEndMessage();
  }
}
