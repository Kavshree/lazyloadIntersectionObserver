const path = require('path');

module.exports = {
  entry: {
    main: './main.js',
    feature1: './src/feature1-container.js',
    feature2: './src/feature2-container.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
