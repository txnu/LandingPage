const path = require("path");

module.exports = {
  mode: "development", // atau 'production'
  entry: "./src/main.tsx", // Masukkan path yang benar ke entry point
  output: {
    filename: "bundle.js", // Nama file output
    path: path.resolve(__dirname, "dist"), // Path folder output
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Ekstensi yang digunakan
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Menggunakan ts-loader untuk file .tsx dan .ts
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "source-map", // Untuk membantu debugging
};
