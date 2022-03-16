const {
  existsSync,
  readdirSync,
  statSync,
  writeFileSync
} = require('fs');
const {
  filesInMainPrefix,
  typedocConfig,
  typedocConfigPath
} = require('../constants');

const originalConfig = typedocConfig;
const nodeModuleEntryPoints = [
  `${filesInMainPrefix}node_modules/react-bootstrap/esm/Card.d.ts`,
  `${filesInMainPrefix}node_modules/react-bootstrap/esm/helpers.d.ts`
];

const appEntryPoints = [
  `${filesInMainPrefix}components`,
  `${filesInMainPrefix}containers`,
  `${filesInMainPrefix}store`,
  `${filesInMainPrefix}styles`
];

const out = `${filesInMainPrefix}docs`;

const readme = `${filesInMainPrefix}README.md`;

let allEntryPoints = [];

const getSubfolders = (folder) => {
  const files = readdirSync(folder);
  let subFolders = [];
  for (let i in files) {
    const fileOrFolder = `${folder}/${files[i]}`;
    if (statSync(fileOrFolder).isDirectory()) subFolders.push(fileOrFolder);
  }
  return subFolders;
};

const hasIndexFile = (folder) => {
  const files = readdirSync(folder);
  return files.includes('index.ts') | files.includes('index.tsx');
};


const populateAllEntryPoints = (folders) => {
  for (let i in folders) {
    const folder = folders[i];
    if (existsSync(folder)) {
      if (hasIndexFile(folder)) {
        allEntryPoints.push(folder);
      }
      populateAllEntryPoints(getSubfolders(folder));
    }
  }
};

const updateTypedocConfig = () => {
  populateAllEntryPoints(appEntryPoints);
  allEntryPoints = allEntryPoints.concat(nodeModuleEntryPoints);

  let newTypeDocConfig = originalConfig;
  newTypeDocConfig.entryPoints = allEntryPoints;
  newTypeDocConfig.out = out;
  newTypeDocConfig.readme = readme;

  writeFileSync(typedocConfigPath, JSON.stringify(newTypeDocConfig, null, 2));
};

module.exports = {
  updateTypedocConfig,
}
