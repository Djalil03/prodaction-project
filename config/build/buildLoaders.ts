import { BuildOptions } from 'config/types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    // если не используем тайпскрипт - нужен babel-loader для работы jsx(react)
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // "style-loader",//
          options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
              },
            }
          },
          // Compiles Sass to CSS
          "sass-loader",
        ],
    } 

    return [
        typescriptLoader,
        cssLoader,
      ]
}