exports.config = {
  namespace: 'bootstrapcomponents',
  generateDistribution: true,
  bundles: [
    { components: ['bs-button'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
