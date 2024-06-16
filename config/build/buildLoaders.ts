import { ModuleOptions } from "webpack";

export function buildLoaders(): ModuleOptions["rules"] {
    return [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        }
      ]
}