var path = require('path')
module.exports = {
    mode: "development",   // development 开发环境  ，production 生产环境
    entry: './src/index.js',  // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),  // 默认打包后的代码，会生成dist目录存放文件
        // filename: 'main.js',  // dist下文件命名
        filename: '[name].[contenthash].js'  // dist下文件随机命名，如main.789asdabfajhhkfa.js
    },
}