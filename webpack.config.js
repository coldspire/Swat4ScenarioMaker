const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = (options && options.mode === 'production') || false;

    return {
        entry: {
            app: './app/index.js',
            generator: './app/scripts/generator.js'
        },
        devtool: (isProduction ? '' : 'eval-source-map'),
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                inject: false,
                template: require('html-webpack-template'),

                lang: 'en-US',
                meta: [
                    { 
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                    }
                ],
                title: 'SWAT 4 Scenario Generator',
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
