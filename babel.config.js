module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      // ['@babel/preset-env', { useBuiltIns: 'usage', corejs: '3.45.1' }], // Circular dependencies when building
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
    plugins: [['@babel/plugin-transform-runtime', { corejs: 3 }]],
    sourceType: 'unambiguous',
  };
};
