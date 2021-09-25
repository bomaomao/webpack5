const path = require('path')
// 【】导入 在内存中自动生成index页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin'); 

// 【】创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件 __dirname表示当前路径
    filename: 'index.html'
})


// 向外暴露一个包的配置对象,node语法，因为webpack是基于node构建的，所以支持所有的Node API和语法
module.exports = {
    mode: 'development', //development开发模式 ，打包后有入口文件信息 production生产模式 ，会进行压缩、
    // entry配置入口
    // 插件
    plugins: [
        htmlPlugin
    ]
}

// export default {} 目前不能使用，这个是es6中 向外导出模块的API，与之对应的是导入import "" from "xx标识符"
// 哪些特性 node 支持呢？ 如果Chrome支持，则node支持；Node.js是一个基于Chrome V8引擎的JavaScript运行环境

