const path = require('path');
module.exports = {
    mode: "development",
    entry: {
        'app': './src/app.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../pub/dist')
    }
};