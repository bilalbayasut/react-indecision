const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              include: /src/,
              use: {
                loader: "babel-loader"
              }
            }
          ]
    },
    mode: 'development'
};