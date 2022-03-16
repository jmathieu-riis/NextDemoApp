const { readFileSync, writeFileSync } = require('fs');
const { marked } = require('marked');
const { sanitize } = require('isomorphic-dompurify');

const convertTypedocReadmeToHtml = () => {
  const readmeString = readFileSync('./README.md').toString();
  const readmeHtml = marked.parse(readmeString);
  const cssImports = `
  <head>
    <link rel="stylesheet" href="./assets/style.css" />
  </head>`;
  const containerStart = `
  <div class="container container-main">
    <div class="row">
      <div class="col-12 col-content">`;
  const containerEnd = `</div></div></div>`
  const cleanReadmeHtml = sanitize(`${containerStart}${readmeHtml}${containerEnd}`);
  writeFileSync('./assets/typedoc-readme.html', `${cssImports}${cleanReadmeHtml}`);
}

module.exports = {
  convertTypedocReadmeToHtml
}
