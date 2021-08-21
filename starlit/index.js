const svgi = require('./svgi');
const path = require('path');
const starlit = require('./starlit');

console.log('\nGenerating \x1b[35mStarLit\x1b[0m Background\n---------------------------------------');

// Load template file.
const inPath = path.join(process.cwd(), 'starlit-temp.svg');
const outPath = path.join(process.cwd(), 'starlit.svg');
console.log('\x1b[36mInjecting code from\x1b[0m ' + inPath + ' \x1b[36minto\x1b[0m ' + outPath);

// Starlit
svgi.inject(inPath, outPath, starlit());

console.log('\n\x1b[32mFinished\x1b[0m\n');