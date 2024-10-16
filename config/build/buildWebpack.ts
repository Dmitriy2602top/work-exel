import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import webpack from "webpack"
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildDevServer } from "./buildDevServer";
import { buildResolver } from "./buildResolver";
import { BuildOptions } from "./types/types";


export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const isDev = options.mode === 'development'
    const { path } = options
    return {
        mode: options.mode ?? "development",

        entry: options.path.entry,

        module: { rules: buildLoaders(options) },

        resolve: buildResolver(options),

        devtool: isDev ? 'inline-source-map' : false,

        output: {
            path: path.output,
            filename: "[name].[contenthash].js",
            clean: true,
        },

        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}