import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import csso from 'postcss-csso';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const plugins = [
  resolve(),
  terser({
    exclude: /\/node_modules/,
  }),
  postcss({
    plugins: [
      atImport(),
      postcssPresetEnv({
        stage: 3,
        features: {
          'custom-media-queries': true,
          'nesting': true
        }
      }),
      csso()
    ],
    extract: true
  })
]

export default [{
    input: 'packages/framework/framework.js',
    output: {
      name: 'undercoat',
      file: pkg.browser,
      format: 'umd'
    },
    plugins: plugins
  },
  {
    input: 'packages/backdrop/backdrop.js',
    output: {
      name: 'Backdrop',
      file: 'packages/backdrop/dist/backdrop.min.js',
      format: 'umd'
    },
    plugins: plugins
  }
];
