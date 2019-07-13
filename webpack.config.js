const path = require('path');
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    compress: true,
    watchContentBase: true,
    inline: true,
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                // 最新の構文を変換
                "@babel/preset-env",
                // ReactのJSXを変換
                "@babel/react"
              ]
            }
          }
        ]
      }
    ]
  }
};
