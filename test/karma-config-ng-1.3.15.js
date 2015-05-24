var VERSION = '1.3.15';

module.exports = function ( karma ) {
  karma.set({
    /**
     * From where to look for files, starting with the location of this file.
     */
    basePath: './../',

    /**
     * This is the list of file patterns to load into the browser during testing.
     */
    files: [
      "bower_components/jquery/dist/jquery.js",
      "bower_components/lodash/lodash.js",
      "bower_components/angular-v"+VERSION+"/angular.js",
      "bower_components/angular-mocks-v"+VERSION+"/angular-mocks.js",
      "src/angular-base64-upload.js",
      "test/globals.js",
      "test/mocks.js",
      "test/helpers.js",
      "test/angular-base64-upload.spec.js"
    ],

    preprocessors: {
        'src/angular-base64-upload.js': ['coverage']
    },

    frameworks: [ 'jasmine' ],
    // plugins: [ 'karma-jasmine', 'karma-chrome-launcher', 'karma-coverage', ''],

    logLevel:  'WARN',
    /**
     * How to report, by default.
     */
    reporters: ['story', 'coverage'],

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    /**
     * On which port should the browser connect, on which port is the test runner
     * operating, and what is the URL path for the browser to use.
     */
    port: 7019,
    urlRoot: '/',

    /**
     * Disable file watching by default.
     */
    autoWatch: false,

    /**
     * The list of browsers to launch to test ondest     * default, but other browser names include:
     * Chrome, ChromeCanary, Firefox, Opera, Safari, PhantomJS
     *
     * Note that you can also use the executable name of the browser, like "chromium"
     * or "firefox", but that these vary based on your operating system.
     *
     * You may also leave this blank and manually navigate your browser to
     * http://localhost:9018/ when you're running tests. The window/tab can be left
     * open and the tests will automatically occur there during the build. This has
     * the aesthetic advantage of not launching a browser every time you save.
     */
    browsers: [
      'PhantomJS'
    ]
  });
};