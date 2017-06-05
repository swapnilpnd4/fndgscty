var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'chrome'
    },
    jasmineNodeOpts : {
        defaultTimeoutInterval : 300000
    },
    allScriptsTimeout: 400000,
    // Testcases files
    specs: ['../App/Login.js'],
    // Add a screenshot reporter:
    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: '../../reports/',
                screenshotsFolder: 'screenshots',
                takeScreenshots: true,
                takeScreenshotsOnlyOnFailures: true
            })
        );
    }
};