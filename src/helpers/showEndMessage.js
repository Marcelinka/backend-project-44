export default function showEndMessage(isVictory, name) {
  if (isVictory) {
    console.log(`Congratulations, ${name}!`);
    return;
  }

  console.log(`Let's try again, ${name}!`);
}
