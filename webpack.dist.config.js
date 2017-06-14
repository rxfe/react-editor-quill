const webpack = require('webpack');

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react'
};
const reactDOMExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom'
};
const quillExternal = {
  root: 'Quill',
  commonjs2: 'quill',
  commonjs: 'quill',
  amd: 'quill'
};
module.exports = {

  entry: {
    'react-editor-quill': './lib/index.js',
    'react-editor-quill.min': './lib/index.js'
  },

  externals: {
    react: reactExternal,
    'react-dom': reactDOMExternal,
    quill: quillExternal
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'dist',
    publicPath: '/',
    libraryTarget: 'umd',
    library: 'ReactEditorQuill'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],

  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }

};
