const { readFileSync, writeFileSync } = require('fs');
const {
  formatSidebarScriptPath,
  indexHtmlPath,
  modulesHtmlPath
} = require('../../constants');

function updateFormatSidebarScriptPath() {
  let indexHtmlString = readFileSync(indexHtmlPath).toString();
  let modulesHtmlString = readFileSync(modulesHtmlPath).toString();
  indexHtmlString = indexHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  modulesHtmlString = modulesHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  writeFileSync(indexHtmlPath, indexHtmlString);
  writeFileSync(modulesHtmlPath, modulesHtmlString);
}

module.exports = {
  updateFormatSidebarScriptPath
}
