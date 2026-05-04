const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'index_cloned.html');
const outputPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Remove the original domain from absolute URLs
html = html.replace(/https?:\/\/www\.oliveapp\.com/g, '');
html = html.replace(/https?:\/\/oliveapp\.com/g, '');

// 2. Handle Next.js image optimization URLs
html = html.replace(/\/_next\/image\?url=[^&"']*(?:%2F|\/)([^%&"']+)(?:&amp;|&)?[^"']*/g, (match, p1) => {
    const filename = decodeURIComponent(p1);
    return `./assets/${filename}`;
});

// 3. Handle all other _next/static references
html = html.replace(/\/_next\/static\/(?:css|chunks|media)\/([a-zA-Z0-9.-]+)(?:\?.*?)?(?=["'])/g, './assets/$1');

// 4. Handle direct /assets/ references
html = html.replace(/\/assets\/(?:[a-zA-Z0-9._-]+\/)*([a-zA-Z0-9._-]+\.[a-z0-9]+)/gi, './assets/$1');

// 5. Handle srcset
html = html.replace(/srcset="([^"]+)"/g, (match, p1) => {
    const parts = p1.split(',').map(part => {
        const trimmed = part.trim();
        const segments = trimmed.split(/\s+/);
        const url = segments[0];
        const descriptor = segments.slice(1).join(' ');
        
        const filenameMatch = url.match(/(?:%2F|\/|assets\/|chunks\/|css\/|media\/)([^%&?/]+)(?:\?|&|$)/);
        if (filenameMatch) {
            const filename = decodeURIComponent(filenameMatch[1]);
            if (filename.match(/\.(png|jpg|jpeg|gif|svg|css|js|woff2|ttf|ico)$/i)) {
                return `./assets/${filename}${descriptor ? ' ' + descriptor : ''}`;
            }
        }
        return trimmed;
    });
    return `srcset="${parts.join(', ')}"`;
});

// 6. Final cleanup: ensure all /assets/ and /_next/ references are ./assets/
html = html.replace(/(?:\/_next\/static\/(?:css|chunks|media)\/|\/assets\/(?:[a-zA-Z0-9._-]+\/)*)([a-zA-Z0-9._-]+\.[a-z0-9]+)/gi, './assets/$1');

// 7. Clean up any accidental double prefixes
html = html.replace(/\.?\.\/assets\//g, './assets/');

fs.writeFileSync(outputPath, html);
console.log('HTML processed successfully');
