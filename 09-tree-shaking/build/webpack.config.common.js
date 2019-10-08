const path = require('path');

module.exports = {
  entry: './src/index.js', //文件的入口

  output: {
    filename: 'bundle.js', //输出的文件别名
    path: path.resolve(__dirname, '../dist'), // 输出的文件存放路径
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', // 将 JS 字符串生成为 style 节点
        'css-loader', // 将 CSS 转化成 CommonJS 模块
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
};