const svgfs = require('./svgfs');
const path = require('path');

console.log('\nGenerating StarLit Background\n---------------------------------------');

// Load template file.
const templatePath = path.join(process.cwd(), 'starlit-temp.svg');
console.log('Loading SVG template: ' + templatePath);
let svg = svgfs.loadSvg(templatePath);

// Do SVG stuff
svg += '\t<circle cx="0" cy="0" r="10" />';

// Save
const starlitPath = path.join(process.cwd(), 'starlit.svg');
console.log('Saving SVG file: ' + starlitPath);
svgfs.saveSvg(starlitPath, svg);

console.log('Finished :)\n');