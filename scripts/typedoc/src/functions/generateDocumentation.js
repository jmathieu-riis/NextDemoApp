const { Application, TSConfigReader, TypeDocReader } = require('typedoc');
const { copyFormatScriptToDocs } = require('./copyFormatScriptToDocs');
const { injectCustomTheme } = require('./injectCustomTheme');
const { updateScriptPathsForDocIndexAndModulesHtml } = require('./updateScriptPathsForDocIndexAndModulesHtml');
const { filesInMainPrefix, typedocConfig } = require('../constants');

async function generateDocumentation() {
  const app = new Application();
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());
  app.bootstrap(typedocConfig);
  const project = app.convert();

  if (project) {
    const outputDir = `${filesInMainPrefix}docs`;
    injectCustomTheme(app);
    await app.generateDocs(project, outputDir);
  }
  copyFormatScriptToDocs();
  updateScriptPathsForDocIndexAndModulesHtml();
}

module.exports = {
  generateDocumentation,
}
