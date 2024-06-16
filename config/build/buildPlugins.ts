import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptionsType } from "./types/types";

export function buildPlugins(
  options: BuildOptionsType
): Configuration["plugins"] {
  return [new HtmlWebpackPlugin({ template: options.paths.html })];
}
