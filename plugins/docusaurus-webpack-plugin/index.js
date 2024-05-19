import * as path from "path";
const loaderPath = require.resolve("reason-loader");
export default function (context, options) {
  return {
    name: "docusaurus-plugin",
    configureWebpack(config, isServer, utils, content) {
      return {
        module: {
          rules: [
            {
              test: /\.rei?$/,
              use: [
                {
                  loader: loaderPath,
                  options: {},
                },
              ],
            },
          ],
        },
      };
    },
  };
}
