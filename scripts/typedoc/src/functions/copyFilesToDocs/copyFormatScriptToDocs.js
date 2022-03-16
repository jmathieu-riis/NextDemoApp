const { copyFileSync } = require('fs');
const { filesInMainPrefix } = require('../../constants');

function copyFormatScriptToDocs() {
  copyFileSync('./assets/formatSidebar.js', `${filesInMainPrefix}docs/assets/formatSidebar.js`);
}

module.exports = {
  copyFormatScriptToDocs
}
