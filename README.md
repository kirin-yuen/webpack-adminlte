# webpack-adminlte

项目转自[https://blog.csdn.net/staritstarit/article/details/77327528](https://blog.csdn.net/staritstarit/article/details/77327528)

#### 安装依赖、loader、plugins(只列部分解析，更多请看package.json)
* `vuex `: 用于 vue 组件间的状态同步 
* `font-awesome `: 各种图标
* `file-loader `: 处理资源文件, 比如图片, 字体等 
* `url-loader `: 对 file-loader 的封装, 针对小图片资源提供 base64 data blob 
* `css-loader `: 处理 css 文件中的 url 等 
* `style-loader `: 将 css 插入到页面的 style 标签 
* `less-* `: 将 less 转成 css 
* `vue-* `: 处理 vue 单文件组件 
* `babel-* `: es6 语法支持, 详细说明参考阮一峰的 Babel 入门教程
* `clean-webpack-plugin `: 用来清空发布目录 
* `html-webpack-plugin `: 用来生成入口页面, 自动引入生成的 js 文件

