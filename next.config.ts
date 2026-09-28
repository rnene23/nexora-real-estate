import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  devIndicators: false,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
    deviceSizes: [480, 768, 1080, 1800],
    imageSizes: [480],
  },
};
export default config;
