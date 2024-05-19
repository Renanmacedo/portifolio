import { Configuration  } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

const config: Configuration & DevServerConfiguration= {
    entry: path.resolve(__dirname, './src/index.tsx'),
    mode: 'development',
    resolve: {
        extensions:  [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
          {
            test: /\.ts?x$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ],
    devServer: {
        port: 4004,
        hot: true
    }
}

export default config;
