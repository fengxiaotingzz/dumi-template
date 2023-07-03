import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-template',
  },
  alias: {
    '@/utils': '/src/utils',
  },
  resolve: {
    atomDirs: [{ type: 'components', dir: 'src/components' }],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
});
