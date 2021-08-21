const svgfs = require('./svgfs');
const path = require('path');
const starlit = require('./starlit');

console.log('\nGenerating StarLit Background\n---------------------------------------');

// Load template file.
const templatePath = path.join(process.cwd(), 'starlit-temp.svg');
console.log('Loading SVG template: ' + templatePath);
let svg = svgfs.loadSvg(templatePath);

// Starlit
svg = starlit(svg);

// Save
const starlitPath = path.join(process.cwd(), 'starlit.svg');
console.log('Saving SVG file: ' + starlitPath);
svgfs.saveSvg(starlitPath, svg);

console.log('Finished :)\n');