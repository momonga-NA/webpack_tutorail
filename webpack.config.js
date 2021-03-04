const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    // path.resolve → 絶対パスを取得
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        // test → 検証
        test: /\.css/,
        // 定義したloaderは下から適用される
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
}