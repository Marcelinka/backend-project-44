#!/usr/bin/env node

import getBrainEvenQuestion from '../src/games/getBrainEvenQuestion.js';
import start from '../src/index.js';

const tip = 'Answer "yes" if the number is even, otherwise answer "no".';

start({ tip, getQuestion: getBrainEvenQuestion });
