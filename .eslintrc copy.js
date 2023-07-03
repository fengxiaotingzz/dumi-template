module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: '/',
        rootPathPrefix: '@/',
      },
    },
  },
};
