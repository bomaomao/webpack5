// 在webpack4.x以上（本版本是5.42.1）, “约定大于配置”，index.js 是webpack打包的入口文件
console.log('这是webpack-dev-server实时打包内容');

// wepack-dev-server打包的文件是托管到内存中，访问项目根目录下main.js可以看到

import './js/01基础数据类型';