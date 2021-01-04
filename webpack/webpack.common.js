const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const paths = require('./paths')

module.exports = {
  context: paths.src,
  entry: {
    app: `./assets/scripts/index.js`,
  },
  output: {
    filename: `assets/scripts/[name].[hash:8].js`,
    path: paths.build,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['autoprefixer', 'postcss-flexbugs-fixes'],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'assets/fonts',
            outputPath: 'assets/fonts',
            name: '[name].[hash:8].[ext]',
          },
        },
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: 'assets/img',
            outputPath: 'assets/img',
            name: '[name].[ext]',
          },
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/app.css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.static,
        },
      ],
    }),
  ],
}
