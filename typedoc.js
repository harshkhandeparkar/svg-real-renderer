const { readdirSync } = require('fs');
const { join } = require('path');

const getListOfFiles = (dirPath) => readdirSync(dirPath).map((name) => join(dirPath, name));

module.exports = {
  excludeProtected: true,
  excludePrivate: true,
  excludeInternal: true,
  includeVersion: true,
  name: 'SVG Real Renderer',
  out: ['docs'],
  readme: 'none',
  entryDocument: 'docs.md',
  entryPoints: [
    'index.ts',
    ...getListOfFiles('src/constants/defaults'),
    ...getListOfFiles('src/types')
  ]
}
