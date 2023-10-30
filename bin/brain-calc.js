#!/usr/bin/env node

import start from '../src/index.js';
import getBrainCalcQuestion from '../src/games/getBrainCalcQuestion.js';

const tip = 'What is the result of the expression?';

start({ tip, getQuestion: getBrainCalcQuestion });
