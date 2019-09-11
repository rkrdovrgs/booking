const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = {

  // This is the entry point or start of our react applicaton
  entry: "./App.dom.js",

  // The plain compiled JavaScript will be output into this file
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },

  // This section desribes the transformations we will perform
  module: {
    rules: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,
        // Webpack will only process files in our src folder. This avoids processing
        // node modules and server files unnecessarily
        include: /(App\.dom|src)/,
        loader: "babel-loader"
      }
    ]
  },
  // This lets us debug our react code in chrome dev tools. Errors will have lines and file names
  // Without this the console says all errors are coming from just coming from bundle.js
  devtool: "eval-source-map",

  plugins: [
    new DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        TARGET_PLATFORM: JSON.stringify('dom')
      }
    })
  ]
};
