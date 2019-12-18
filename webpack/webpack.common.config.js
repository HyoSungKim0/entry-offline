module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    node: {
        __dirname: true,
        __filename: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: [
                    /node_modules/,
                    /bower_components/,
                    /modal[\\/]app\.js/,
                    /entry-tool/,
                ],
                use: [{ loader: 'babel-loader' }],
            },
            {
                test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot|cur)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader',
                options: {
                    name: '[hash].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [],
};