import { defineConfig } from 'father';

export default defineConfig({
  umd: {
    output: 'dist',
    externals: {
      react: 'react',
      'react-dom': 'react-dom',
    },
    theme: {
      prefixClx: 'x-comp',
    },
  },
});
