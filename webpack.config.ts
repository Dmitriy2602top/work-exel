import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildPath } from "./config/build/types/types";

type Mode = "production" | "development";

interface EnvVariable {
  mode: Mode;
  port: number;
  analyzer: boolean;
  platform: "desktop" | "mobile";
}

export default (env: EnvVariable) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    output: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const config: webpack.Configuration = buildWebpack({
    mode: env.mode ?? "development",
    port: env.port ?? 3333,
    path: paths,
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? "desktop",
  });
  return config;
};
