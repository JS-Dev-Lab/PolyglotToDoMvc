const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
require("regenerator-runtime");

module.exports = (_, argv) => {
  const app = argv.app || argv.default;
  return {
    entry: ["regenerator-runtime", "./src/main.js"],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, 'src/')
      }
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        },
        {
          test: /\.vue$/,
          loader: "vue-loader"
        },
        {
          test: /\.css$/,
          use: (app === "vue") ? ["vue-style-loader", "css-loader"] : ['style-loader', "css-loader"]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      liveReload: true,
      port: 9000
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.Framework": JSON.stringify(app)
      }),
      ...(argv.mode === "development" ? [new webpack.SourceMapDevToolPlugin({})] : []),
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html"
      }),
      new VueLoaderPlugin()
    ],
    output: {
      chunkFilename: '[name].bundle.js',
      filename: "main.js",
      path: path.resolve(__dirname, "docs")
    }
  };
}
