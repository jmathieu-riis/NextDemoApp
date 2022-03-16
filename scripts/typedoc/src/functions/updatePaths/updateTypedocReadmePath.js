const { readFileSync, writeFileSync } = require('fs');
const { indexHtmlPath, typedocReadmePathInDocs, typedocReadmePath } = require('../../constants');


function updateTypedocReadmePath() {
  let indexHtmlString = readFileSync(indexHtmlPath).toString();
  indexHtmlString = indexHtmlString.replace(typedocReadmePath, typedocReadmePathInDocs);
  writeFileSync(indexHtmlPath, indexHtmlString);
}

module.exports = {
  updateTypedocReadmePath
}