import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  // esm: { output: 'dist', transformer: 'babel' },
  // cjs: { output: 'dist/cjs', transformer: 'babel' },
  define: {
    prefixClx: 'x-comp',
  },
  umd: {
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    output: 'dist',
    theme: {
      prefixClx: 'x-comp',
    },
  },
});
