import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'dumi-template',
  },
  alias: {
    '@/utils': '/src/utils',
    '@/icon': '/src/icon',
  },
  resolve: {
    atomDirs: [{ type: 'components', dir: 'src/components' }],
  },
  define: {
    prefixClx: 'x-comp',
  },
  lessLoader: {
    modifyVars: {
      hack: 'true; @import "@/css/variables.less"',
    },
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
