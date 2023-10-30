#!/usr/bin/env node

import start from '../src/index.js';
import getBrainEvenQuestion from '../src/games/getBrainEvenQuestion.js';

const tip = 'Answer "yes" if the number is even, otherwise answer "no".';

start({ tip, getQuestion: getBrainEvenQuestion });
