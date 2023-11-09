#!/usr/bin/env node

import start from '../src/index.js';
import getBrainGcdQuestion from '../src/games/getBrainGcdQuestion.js';

const tip = 'Find the greatest common divisor of given numbers.';

start({ tip, getQuestion: getBrainGcdQuestion });
