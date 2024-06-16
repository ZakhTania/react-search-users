import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptionsType } from "./types/types";

export function buildDevServer(options: BuildOptionsType):DevServerConfiguration {
  return {
    port: options.port ?? 3000,
    open: true,
  };
}
