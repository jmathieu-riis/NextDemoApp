const { readFileSync } = require('fs');
const filesInMainPrefix = '../../';
const formatSidebarScriptPath = './assets/formatSidebar.js';
const indexHtmlPath = `${filesInMainPrefix}docs/index.html`;
const modulesHtmlPath = `${filesInMainPrefix}/docs/modules.html`;
const typedocConfigPath = 'typedoc.json';
const typedocConfigString = readFileSync(typedocConfigPath).toString();
const typedocConfig  = JSON.parse(typedocConfigString);
const typedocReadmePath = 'scripts/typedoc/README.md';
const typedocReadmePathInDocs = 'typedoc-readme.html';

module.exports = {
  filesInMainPrefix,
  formatSidebarScriptPath,
  indexHtmlPath,
  modulesHtmlPath,
  typedocConfig,
  typedocConfigPath,
  typedocReadmePath,
  typedocReadmePathInDocs
}
