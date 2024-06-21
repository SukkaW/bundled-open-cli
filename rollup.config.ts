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
    commonjs(),
    nodeResolve({
      exportConditions: ['import', 'require', 'default']
    }),
    minify({
      module: true
    })
  ]
});
