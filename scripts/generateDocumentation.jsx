import fs from 'fs';
import { Application, TSConfigReader, TypeDocReader, JSX } from 'typedoc';
const typeDocConfigPath = '../typedoc.json';
const originalConfigString = fs.readFileSync(typeDocConfigPath).toString();
const originalConfig = JSON.parse(originalConfigString);
const formatSidebarScriptPath = './assets/formatSidebar.js';

function load(app) {
  app.renderer.hooks.on("body.end", () => {
    const myScript = JSX.createElement('script', { type: 'text/javascript', src: `.${formatSidebarScriptPath}` }, null);
    return myScript;
  });
}

function copyFormatScriptToDocs() {
  fs.copyFileSync('./assets/formatSidebar.js', '../docs/assets/formatSidebar.js');
}

function updateScriptPathsInIndexAndModulesHTML() {
  const indexPath = '../docs/index.html';
  const modulesPath = '../docs/modules.html';
  let indexHtmlString = fs.readFileSync(indexPath).toString();
  let modulesHtmlString = fs.readFileSync(modulesPath).toString();
  indexHtmlString = indexHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  modulesHtmlString = modulesHtmlString.replace(`.${formatSidebarScriptPath}`, formatSidebarScriptPath);
  fs.writeFileSync(indexPath, indexHtmlString);
  fs.writeFileSync(modulesPath, modulesHtmlString);
}

async function main() {
  const app = new Application();
  app.options.addReader(new TSConfigReader());
  app.options.addReader(new TypeDocReader());
  app.bootstrap(originalConfig);
  const project = app.convert();

  if (project) {
    const outputDir = '../docs';
    load(app);
    await app.generateDocs(project, outputDir);
  }
  copyFormatScriptToDocs();
  updateScriptPathsInIndexAndModulesHTML();
}

main().catch(console.error);
