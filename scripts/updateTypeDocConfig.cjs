const fs = require('fs');
const prefix = '../';
const typeDocConfigPath = `${prefix}typedoc.json`;
const originalConfigString = fs.readFileSync(typeDocConfigPath).toString();
const originalConfig = JSON.parse(originalConfigString);

const nodeModuleEntryPoints = [
  "../node_modules/react-bootstrap/esm/Card.d.ts",
  "../node_modules/react-bootstrap/esm/helpers.d.ts"
];

const appEntryPoints = [
  `${prefix}components`,
  `${prefix}containers`,
  `${prefix}store`,
  `${prefix}styles`
];

let allEntryPoints = [];

const getSubfolders = (folder) => {
  const files = fs.readdirSync(folder);
  let subFolders = [];
  for (let i in files) {
    const fileOrFolder = `${folder}/${files[i]}`;
    if (fs.statSync(fileOrFolder).isDirectory()) subFolders.push(fileOrFolder);
  }
  return subFolders;
};

const hasIndexFile = (folder) => {
  const files = fs.readdirSync(folder);
  return files.includes('index.ts') | files.includes('index.tsx');
};


const populateAllEntryPoints = (folders) => {
  for (let i in folders) {
    const folder = folders[i];
    if (fs.existsSync(folder)) {
      if (hasIndexFile(folder)) {
        allEntryPoints.push(folder);
      }
      populateAllEntryPoints(getSubfolders(folder));
    }
  }
};

populateAllEntryPoints(appEntryPoints);
allEntryPoints = allEntryPoints.concat(nodeModuleEntryPoints);

let newTypeDocConfig = originalConfig;
newTypeDocConfig.entryPoints = allEntryPoints;

fs.writeFileSync(typeDocConfigPath, JSON.stringify(newTypeDocConfig, null, 2));
