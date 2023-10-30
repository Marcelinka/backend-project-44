#!/usr/bin/env node
import { greet } from '../src/cli.js';
import { showGameTip, playRound, showEndMessage } from '../src/brain-even-helpers.js';

const name = greet();
let isVictory = true;

showGameTip();

for (let i = 0; i < 3; i += 1) {
  const result = playRound();

  if (!result) {
    isVictory = false;
    break;
  }
}

showEndMessage(isVictory, name);
