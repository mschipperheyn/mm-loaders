
import fs from 'fs'
import path from 'path'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import visualizer from 'rollup-plugin-visualizer'

const prod = process.env.NODE_ENV === 'production'
const mode = prod ? 'production' : 'development'

console.log(`Creating ${mode} bundle...`)

const targets = prod ? [
  { dest: 'dist/react-loaders.min.js', format: 'umd' }
] : [
  { dest: 'dist/react-loaders.js', format: 'umd' },
  { dest: 'dist/react-loaders.es.js', format: 'es' }
]

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, './.babelrc')))

const plugins = [
  nodeResolve(),
  commonjs(),
  babel(Object.assign({}, babelrc, {
    babelrc: false,
    presets: babelrc.presets.map(p => (
      p !== 'es2015'
      ? p
      : [
        'es2015',
        {
          'modules': false
        }
      ]
    )),
    plugins: babelrc.plugins.concat(['external-helpers'])
  }))
]

if (prod) plugins.push(uglify(), visualizer({ filename: './bundle-stats.html' }))

export default {
  entry: 'src/index.js',
  moduleName: 'styled',
  external: ['react', 'styled-components'],
  exports: 'named',
  targets,
  plugins,
  globals: { react: 'React', 'styled-components': 'styled' }
}
