const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = (options && options.mode === 'production') || false;

    return {
        entry: {
            app: './app/scripts/index.js'
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
            }),
            new CopyWebpackPlugin([
              { from: 'app/assets/images', to: 'assets/images' }
            ]),
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            library: "Index",
            libraryTarget: "var"
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
