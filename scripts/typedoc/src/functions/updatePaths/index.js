const { updateFormatSidebarScriptPath } = require('./updateFormatSidebarScriptPath');
const { updateTypedocReadmePath } = require('./updateTypedocReadmePath');

function updatePaths() {
  updateFormatSidebarScriptPath();
  updateTypedocReadmePath();
}

module.exports = {
  updatePaths
}