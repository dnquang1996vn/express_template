const puppeteer = require('puppeteer');

async function exportPdfFromUrl(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pdfBuffer = await page.pdf();
  await browser.close();
  return pdfBuffer;
}

module.exports = {
  exportPdfFromUrl,
};
