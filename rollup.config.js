import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      name: 'reactTextEmoji',
      file: pkg.browser,
      format: 'umd',
      globals: {
        react: 'React',
      },
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      terser(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: {
      file: pkg.module,
      format: 'es',
      globals: {
        react: 'react',
      },
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      terser(),
      resolve(),
      commonjs(),
    ],
  },
  {
    input: 'src/index.js',
    external: ['react'],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        globals: {
          react: 'react',
        },
      },
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      terser(),
      resolve(),
      commonjs(),
    ],
  },
]
