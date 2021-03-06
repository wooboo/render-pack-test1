const path = require('path')
module.exports = {
  entry: {
    main: './src/main.tsx',
    render: ['./src/publicPath.js','./src/render.tsx']
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].bundle.js',
    // publicPath: 'https://localhost:8080/',
    library: ['SCB','B2C','HomePage'],
    libraryTarget: 'umd',
    globalObject: 'window'
  },
  module: {
    rules: [
      {
        test: /\.(j|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
              // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
              importLoaders: 1,
              // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:8]',
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
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.ts', '.tsx', '.scss'],
  },
  externals: {
    // Use external version of React
    "react": "React",
    "react-dom": "ReactDOM"
},
  devServer: {
    https: true,
    contentBase: path.resolve(__dirname, './public'),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
}