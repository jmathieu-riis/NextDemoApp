const { readFileSync, writeFileSync } = require('fs');
const { filesInMainPrefix, formatSidebarScriptPath } = require('../constants');

function updateScriptPathsForDocIndexAndModulesHtml() {
  const indexPath = `${filesInMainPrefix}docs/index.html`;
  const modulesPath = `${filesInMainPrefix}/docs/modules.html`;
  let indexHtmlString = readFileSync(indexPath).toString();
  let modulesHtmlString = readFileSync(modulesPath).toString();
  indexHtmlString = indexHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  modulesHtmlString = modulesHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  writeFileSync(indexPath, indexHtmlString);
  writeFileSync(modulesPath, modulesHtmlString);
}

module.exports = {
  updateScriptPathsForDocIndexAndModulesHtml
}
