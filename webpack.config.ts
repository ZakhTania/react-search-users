import { Configuration } from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildModeType, BuildPaths } from "./config/build/types/types";
import path from "path";

type EnvType = {
  mode: BuildModeType;
  port: number;
};

export default (env: EnvType): Configuration => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "src", "index.html"),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    paths,
  });
  return config;
};
