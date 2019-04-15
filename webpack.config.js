module.exports = {
  mode: "development",
  entry: './hello.ts',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [{
        loader: 'ts-loader'
      }]
    }]
  }
}
