export type BuildPaths = {
    entry: string;
    html: string;
    output: string;
}

export type BuildModeType = "production" | "development";

export type BuildOptionsType = {
    port: number;
    paths: BuildPaths;
    mode: BuildModeType;
}