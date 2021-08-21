const svgfs = require('./svgfs');
const path = require('path');
const starlit = require('./starlit');

console.log('\nGenerating \x1b[35mStarLit\x1b[0m Background\n---------------------------------------');

// Load template file.
const templatePath = path.join(process.cwd(), 'starlit-temp.svg');
console.log('\x1b[36mLoading SVG template\x1b[0m: ' + templatePath);
let svg = svgfs.loadSvg(templatePath);

// Starlit
svg = starlit(svg);

// Save
const starlitPath = path.join(process.cwd(), 'starlit.svg');
console.log('\x1b[36mSaving SVG\x1b[0m: ' + starlitPath);
svgfs.saveSvg(starlitPath, svg);

console.log('\n\x1b[32mFinished\x1b[0m\n');