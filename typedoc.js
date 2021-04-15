module.exports = {
  excludeProtected: true,
  excludePrivate: true,
  excludeInternal: true,
  includeVersion: true,
  name: 'SVG Real Renderer',
  includes: ['src/types'],
  out: ['docs'],
  readme: 'none',
  entryDocument: 'docs.md',
  entryPoints: ['index.ts']
}
