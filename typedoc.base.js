const { readdirSync } = require('fs');
const { join } = require('path');

const getListOfFiles = (dirPath) => readdirSync(dirPath).map((name) => join(dirPath, name));

module.exports = {
  excludeProtected: true,
  excludePrivate: true,
  excludeInternal: true,
  includeVersion: true,
  name: 'SVG Real Renderer',
  entryPoints: [
    'index.ts',
    ...getListOfFiles('src/constants/defaults'),
    ...getListOfFiles('src/constants/events'),
    ...getListOfFiles('src/types')
  ]
}
