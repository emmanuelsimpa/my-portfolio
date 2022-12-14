var path = require("path");
var fs = require("fs");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// Look for .html files
var htmlFiles = [];
var directories = ["src"];
while (directories.length > 0) {
  var directory = directories.pop();
  var dirContents = fs
    .readdirSync(directory)
    .map((file) => path.join(directory, file));

  htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory())
  );
}

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              pngquant: {
                quality: [0.9, 0.95],
              },
            },
          },
        ],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10kb
          },
        },
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    // Build a new plugin instance for each .html file found
    ...htmlFiles.map(
      (htmlFile) =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(path.normalize("src/"), ""),
          inject: false,
        })
    ),
  ],
};
