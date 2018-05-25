const path = require('path');


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
            }
        ]
    }
}