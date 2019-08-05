const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = (options && options.mode === 'production') || false;

    return {
        entry: {
            app: './app/app.js'
        },
        devtool: (isProduction ? '' : 'eval-source-map'),
        devServer: {
            contentBase: './dist'
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: false,
                template: './app/index.html'
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ]
        }
    };
};
