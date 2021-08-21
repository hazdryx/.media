const fs = require('fs');
module.exports = {
    /**
     * Injects code into an SVG file where the comment <!-- INJECT CODE HERE --> is.
     * 
     * @param {fs.PathLike} inPath 
     * @param {fs.PathLike} outPath 
     * @param {string} code 
     */
    inject: function(inPath, outPath, code) {
        const injectFlag = '<!-- INJECT CODE HERE -->';
        // Load SVG
        let svg = fs.readFileSync(inPath, 'utf8');

        // Inject code
        let injectIndex = svg.indexOf(injectFlag);
        if (injectIndex > 0) {
            svg = svg.substr(0, injectIndex) + code + svg.substr(injectIndex + injectFlag.length);
        }

        // Save SVG
        fs.writeFileSync(outPath, svg, 'utf8');
    }
}