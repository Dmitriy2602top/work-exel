import { Configuration } from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";

export function buildDevServer({
  port,
}: BuildOptions): Configuration["devServer"] {
  return {
    open: true,
    port: port ?? 4000,
    historyApiFallback: true,
    hot: true,
  };
}
