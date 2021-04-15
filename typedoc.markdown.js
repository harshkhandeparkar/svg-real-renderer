const baseOptions = require('./typedoc.base');

module.exports = {
  ...baseOptions,
  out: ['docs'],
  readme: 'none',
  entryDocument: 'docs.md'
}
