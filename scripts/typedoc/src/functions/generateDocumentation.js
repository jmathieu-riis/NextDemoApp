const { Application, TSConfigReader, TypeDocReader } = require('typedoc');
const { copyFilesToDocs } = require('./copyFilesToDocs');
const { injectCustomTheme } = require('./injectCustomTheme');
const { updatePaths } = require('./updatePaths');
const { filesInMainPrefix, typedocConfig } = require('../constants');
const { convertTypedocReadmeToHtml } = require('./fileConversion');

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
  convertTypedocReadmeToHtml();
  copyFilesToDocs();
  updatePaths();
}

module.exports = {
  generateDocumentation,
}
