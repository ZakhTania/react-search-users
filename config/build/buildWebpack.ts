import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolve } from "./buildResolve";
import { BuildOptionsType } from "./types/types";

export function buildWebpack(options: BuildOptionsType): Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";

  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "main.js",
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolve(),
    devtool: isDev ? "inline-source-map" : false,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
