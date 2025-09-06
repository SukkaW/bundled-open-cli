import { defineConfig } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { minify } from 'rollup-plugin-swc3';

export default defineConfig({
  input: require.resolve('open-cli/cli.js'),
  output: {
    file: 'dist/cli.mjs',
    format: 'es'
  },
  plugins: [
    commonjs({
      esmExternals: true
    }),
    nodeResolve({
      exportConditions: ['import', 'require', 'default']
    }),
    minify({
      compress: {
        module: true,
        passes: 3,
      },
      mangle: true,
      format: {
        ascii_only: true
      },
      module: true
    })
  ]
});
