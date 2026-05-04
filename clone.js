const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function clonePage() {
    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    console.log('Navigating to https://www.oliveapp.com/...');
    await page.goto('https://www.oliveapp.com/', {
        waitUntil: 'networkidle0',
        timeout: 60000
    });

    // Get the rendered HTML
    const content = await page.content();

    // Save the HTML
    const outputPath = path.join(__dirname, 'index_cloned.html');
    fs.writeFileSync(outputPath, content);

    console.log(`Page cloned successfully to ${outputPath}`);

    await browser.close();
}

clonePage().catch(err => {
    console.error('Error cloning page:', err);
    process.exit(1);
});
