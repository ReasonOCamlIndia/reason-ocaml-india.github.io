import * as path from "path";
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
                  loader: path.resolve(
                    "/Users/manas/development/dining-philosophers/webpack-reason-loader",
                  ),
                  options: { separateEsyJson: true },
                },
              ],
            },
          ],
        },
      };
    },
  };
}
