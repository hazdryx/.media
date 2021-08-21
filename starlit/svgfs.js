const fs = require('fs');
module.exports = {
    /**
     * Loads an SVG string with the closing SVG tag removed.
     * @param {fs.PathLike} path 
     */
    loadSvg: function (path) {
        let svg = fs.readFileSync(path, {
            encoding: 'utf8'
        });
    
        let cti = svg.indexOf('</svg>');
        if (cti < 0) {
            return null;
        }
        else {
            return svg.substr(0, cti);
        }
    },
    /**
     * Saves an SVG string and adds the closing SVG tag.
     * @param {fs.PathLike} path 
     */
    saveSvg: function (path, svg) {
        fs.writeFileSync(path, svg + '\n</svg>', 'utf8');
    }
}