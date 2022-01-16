const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, "build")
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'img-optimize-loader',
                        options: {
                            compress: {
                                mode: "high",
                                webp: true,
                                gifsicle: true,
                                disableOnDevelopment: false
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(mp[3|4])$/i,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src', 'index.html')
        })
    ]
}