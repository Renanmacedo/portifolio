import { Configuration  } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import * as path from 'path';

const styleLoader = MiniCssExtractPlugin.loader

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
          {
            test: /\.s[ac]ss$/i,
            use: [
              styleLoader,
              "css-loader",
              "postcss-loader",
              "sass-loader"
            ],
          },
          {
            test: /\.css$/i,
            use: [styleLoader, "css-loader", "postcss-loader"],
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        }),
        new MiniCssExtractPlugin(
            {
                filename: "styles.css",
                chunkFilename: "styles.css"
            }
        )
    ],
    devServer: {
        port: 4004,
        hot: true
    }
}

export default config;
