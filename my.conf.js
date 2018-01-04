module.exports = function(config) {
  config.set({
    autoWatch: false,
    basePath: '',
    frameworks: ['jasmine', 'requirejs', 'es6-shim'],
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'spec/gilded_rose_spec.js',
      'src/gilded_rose.js'
    ],
    browsers: ['PhantomJS'],
    plugins: [
      'karma-es6-shim',
      'karma-jasmine',
      'karma-requirejs',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-babel-preprocessor',
      'babel-plugin-transform-es2015-modules-amd'
    ],
    singleRun: true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
      '*.js': ['coverage'],
      'spec/gilded_rose_spec.js': ['babel'],
      'src/gilded_rose.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['env'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }
  });
};
