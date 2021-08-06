const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      template: 'src/index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'deploy/CNAME',
        },
      ],
    }),
  ],
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-bootstrap': 'ReactBootstrap'
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/i,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.(js|ts)x?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(svg|png)$/,
        use: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.(pdf)$/,
        use: 'file-loader?name=docs/[name].[ext]',
      },
    ],
  },
};