const path = require('path');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
module.exports = {
    mode: 'development', // 开发模式
    //mode: 'production', // 生产模式
    entry: [path.resolve(__dirname, '../src/scripts/main.js'), path.resolve(__dirname, '../src/scripts/main2.js')], // 入口文件
    output: {
        filename: '[name].build.[hash:8].js', // 打包后的文件名称
        path: path.resolve(__dirname, '../dist') // 打包后的目录
    },
    plugins: [new CleanWebpackPlugin()]
}