import { ModuleOptions } from "webpack";
import { BuildOptionsType } from "./types/types";

export function buildLoaders(options: BuildOptionsType): ModuleOptions["rules"] {
    return [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        }
      ]
}