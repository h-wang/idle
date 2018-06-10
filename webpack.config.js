const path = require('path');

module.exports = (env, argv) => {
  return {
    entry: './src/idle.js',
    output: {
      filename: argv.mode === 'production' ? 'idle.min.js' : 'idle.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
};
