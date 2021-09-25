### 创建webpack相关项目
1. npm init -y 初始化npm包管理器  package.json
2. 项目下创建src，dist（打包后代码）
3. npm i -g yarn ;yarn add webpack --dev
3. npm i webpack-cli -dev 【webpack-cli用于在命令行中运行webpack，cli即命令行接口（Command Line Interface）】
4. 新增了mode选项：development开发模式 ，打包后有入口文件信息 production生产模式 ，会进行压缩\
5. npm i webpack-dev-server -D 用于实时打包 注意webpack-cli版本匹配问题npm i webpack-cli@3.3.12 -D 
6. npm i html-webpack-plugin -D将首页/src/index.html存储到内存中，方便频繁修改

### 基础
1. 因为webpack是基于node构建的，所以支持所有的Node API和语法
2. 在webpack4.x以上（本版本是5.42.1）, “约定大于配置”，./src/index.js 是webpack打包的入口文件，./dist/main.js是出口文件
3. 哪些特性 node 支持呢？ 如果Chrome支持，则node支持；Node.js是一个基于Chrome V8引擎的JavaScript运行环境
4. babel支持所有的es6与es7高级特性，因为babel能将所有浏览器不识别的高级API或者语法转化成低级的能够识别的API或者语法，是一个转化器
5. wepack-dev-server打包的文件是托管到内存中，访问项目根目录下main.js可以看到【如果保存在磁盘中，访问比较慢，且因为是机械的，频繁修改会伤磁盘】
6.  "dev": "webpack-dev-server --open chrome打开浏览器，不写浏览器名则打开默认浏览器 --port 3000端口号 --hot热更新 --progress打包进度 --compress配置是否启用 gzip 压缩 --host 127.0.0.1域名"

### 面试 https://www.cnblogs.com/gaoht/p/11310365.html
1. 项目依赖dependencies 开发依赖devDependencies

项目依赖：在项目的开发阶段和线上运营阶段，都需要依赖的第三方包
使用npm install 包名 命令将包添加到package.json文件的dependencies字段中
重新安装时使用npm install --production 只安装项目依赖
开发依赖

开发依赖：在项目的开发阶段需要依赖，线上运营阶段不需要的第三方包
使用npm install 包名 --save-dev命令将包添加到package.json文件的devDependencies字段中

2. package.json 项目描述文件
    package-lock.json 记录模块与模块之间的依赖关系
    锁定包的版本
    记录项目所依赖第三方包的树状结构和包的下载地址，加快重新安装的下载速度

3. webpack原生是只能解析js文件
Loader的作用是让webpack拥有了加载和解析非JavaScript文件的能力。
在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

WebPack可以看做是模块打包机：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其打包为合适的格式以供浏览器使用。

4. 域名根目录下面 有/src/index.html 以及 /src/index.js被打包后的内容(类似/dist/main,js)