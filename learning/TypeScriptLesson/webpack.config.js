const { resolve } = require('path');
module.exports = {
  entry: {
    main: resolve('src/index.ts'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
