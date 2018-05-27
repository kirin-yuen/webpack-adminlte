const path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack');


module.exports = {
    entry: {
        index: ['babel-polyill', './src/index.js'],
        about: ['babel-polyill', './src/about.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash:8].js' // 8位的hash值
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.common.js',
            jquery$: 'admin-lte/plugins/jQuery/jquery-2.2.3min.js',
            src: path.resolve(__dirname, 'src'),
            assets: path.resolve(__dirname, 'src/assets'),
            components: path.resolve(__dirname, 'src/components'),
        }
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')]
            },{
                test: /.vue$/,
                loader: 'vue-loader'
            },{
                test: /.less$/,
                loader: 'less-loader'
            },{
                test: /.css$/,
                loader: ['style-loader', 'css-loader']
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=images/[name].[hash:8].[ext]'
            }
            ,{
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=fonts/[name].[hash:8].[ext]'
            },{
                test: /\.(swf|mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader?limit=10000&name=media/[name].[hash:8].[ext]'
            }]
        ],
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                "window.jQuery": 'jquery',
                "window.$": 'jquery'
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                title: '视频广场',
                inject: true, // head -> Cannot find element: #app
                chunks: ['index'],
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            }),
            //生成版本信息页面, 在这个页面中自动引用入口 about --> dist/js/about.[chunkhash:8].js
            //以 src/index.html 这个文件作为模板
            new HtmlWebpackPlugin({
                filename: 'about.html',
                title: '版本信息',
                inject: true,
                chunks: ['about'],
                template: './src/index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: false
                }
            })
        ]
    }
}