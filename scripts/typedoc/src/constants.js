const { readFileSync } = require('fs');
const filesInMainPrefix = '../../';
const formatSidebarScriptPath = './assets/formatSidebar.js';
const typedocConfigPath = 'typedoc.json';
const typedocConfigString = readFileSync(typedocConfigPath).toString();
const typedocConfig  = JSON.parse(typedocConfigString);

module.exports = {
  filesInMainPrefix,
  formatSidebarScriptPath,
  typedocConfig,
  typedocConfigPath
}
