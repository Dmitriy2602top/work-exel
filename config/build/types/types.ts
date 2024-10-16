export type BuildMode = "production" | "development";
export interface BuildPath {
  entry: string;
  output: string;
  html: string;
  src: string;
}
export interface BuildOptions {
  port: number;
  path: BuildPath;
  mode: BuildMode;
  analyzer: boolean;
  platform: "desktop" | "mobile";
}
