/**
 * Manipulates the given SVG and returns it.
 * @param {string} svg 
 */
module.exports = function(svg) {
    svg += '\t<circle cx="0" cy="0" r="10" />';
    return svg;
};