module.exports = {
  extends: ['badboyku'],
  settings: {
    'import/resolver': { node: { extensions: ['.js', '.ts', '.d.ts'], moduleDirectory: ['./node_modules', './src'] } },
    react: { version: '999.999.999' },
  },
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
  },
};
