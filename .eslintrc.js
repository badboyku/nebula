module.exports = {
  extends: ['badboyku'],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.d.ts'], moduleDirectory: ['./node_modules', './src'] } },
    react: { version: '999.999.999' },
  },
  rules: {},
};
