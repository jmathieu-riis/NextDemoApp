const { copyFileSync } = require('fs');
const { filesInMainPrefix, typedocReadmePathInDocs } = require('../../constants');

function copyTypedocReadmeToDocs() {
  copyFileSync('./assets/typedoc-readme.html', `${filesInMainPrefix}docs/${typedocReadmePathInDocs}`);
}

module.exports = {
  copyTypedocReadmeToDocs
}
