const { copyFormatScriptToDocs } = require('./copyFormatScriptToDocs');
const { copyTypedocReadmeToDocs } = require('./copyTypedocReadmeToDocs');

function copyFilesToDocs() {
  copyFormatScriptToDocs();
  copyTypedocReadmeToDocs();
}

module.exports = {
  copyFilesToDocs
}
