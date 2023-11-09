import readlineSync from 'readline-sync';

export default function playRound(question, rightAnswer) {
  console.log(`Question: ${question}`);

  const answer = readlineSync.question('Your answer: ');

  if (answer === rightAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
}
