/**
 * Manipulates the given SVG and returns it.
 * @param {string} svg 
 */
module.exports = function() {
    let svg = '';

    //
    // CREATE
    //
    // Constants
    const WIDTH = 650;
    const HEIGHT = 150;
    const MIN_DISTANCE_SQ = 350;

    // Generate stars.
    let stars = [];
    for (let i = 0; i < 500; i++) {
        stars.push({
            x: Math.random() * WIDTH - WIDTH / 2,
            y: Math.random() * HEIGHT - HEIGHT / 2
        });
    }

    // Generate connections
    let lines = [];
    for (let i = 0; i < stars.length - 1; i++) {
        for (let j = i + 1; j < stars.length; j++) {
            let s0 = stars[i];
            let s1 = stars[j];
            let dx = s1.x - s0.x;
            let dy = s1.y - s0.y;
            let dist = dx * dx + dy * dy;
            if (dist < MIN_DISTANCE_SQ) {
                lines.push({
                    x1: s0.x,
                    y1: s0.y,
                    x2: s1.x,
                    y2: s1.y,
                    opacity: Math.max(dist / MIN_DISTANCE_SQ, 0.15)
                });
            }
        }
    }

    //
    // RENDER
    //
    // Header
    svg += '<!-- AUTOGENERATED CODE -->\n';

    // Render Lines
    lines.forEach(line => {
        svg += `\t<line x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" stroke="url(#lineStroke)" stroke-width="0.25" stroke-opacity="${line.opacity}"/>\n`;
    });

    // Render Stars
    stars.forEach(star => {
        svg += `\n\t<use href="#star" x="${star.x}" y="${star.y}" />`;
    });
    return svg;
};