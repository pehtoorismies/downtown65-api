const plugins = ['import-graphql'];
const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'entry',
      targets: {
        node: 'current',
      },
      debug: false,
    },
  ],
  '@babel/preset-flow',
];

module.exports = { presets, plugins };
