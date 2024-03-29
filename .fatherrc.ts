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
    chainWebpack(memo) {
      memo.optimization.splitChunks({
        cacheGroups: {
          antdesigns: {
            name: 'antdesigns',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@ant-design|antd)[\\/]/,
            priority: -11,
          },
        },
      });
      return memo;
    },
  },
});
