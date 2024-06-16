import { Configuration } from "webpack";
import { BuildOptionsType } from "./types/types";

export function buildResolve(options: BuildOptionsType): Configuration["resolve"] {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
