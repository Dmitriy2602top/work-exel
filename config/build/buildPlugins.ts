import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import webpack, { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const isDev = options.mode === "development";
  const { path } = options;

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({ template: path.html }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(options.platform),
    }),
  ];

  if (isDev)
    plugins.push(
      new webpack.ProgressPlugin(),
      new ForkTsCheckerWebpackPlugin(),
      new ReactRefreshWebpackPlugin()
    );

  if (!isDev)
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
      options.analyzer && new BundleAnalyzerPlugin()
    );

  return plugins;
};
