module.exports = function(config) {
  config.set({

    frameworks: ["mocha", "karma-typescript"],

    files: [
      { pattern: "src/**/*.ts" }
    ],

    preprocessors: {
      "src/**/*.+(ts)": ["karma-typescript"]
    },

    karmaTypescriptConfig: {
      bundlerOptions: {
        addNodeGlobals: true,
        constants: {
          __STRING__: JSON.stringify("globalString"),
          __BOOLEAN__: true,
          "process.env": {
            "VARIABLE": "value"
          }
        },
        entrypoints: /\.spec\.(ts)$/,
        validateSyntax: false
      },
      compilerDelay: 500,
      coverageOptions: {
        instrumentation: true,
        exclude: [/\.(d|spec|test)\.ts$/i],
        threshold: {
          global: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
          },
          file: {
            statements: 100,
            branches: 100,
            functions: 100,
            lines: 100
          }
        }
      },
      reports: {
        "cobertura": {
          "directory": "coverage",
          "filename": "coverage.xml",
          "subdirectory": "cobertura"
        },
        "lcovonly": {
          "directory": "coverage",
          "filename": "lcovonly/lcov.info"
        },
        "html": "coverage",
        "text-summary": ""
      },
      tsconfig: "./tsconfig.json"
    },

    reporters: ["dots", "karma-typescript"],

    browserNoActivityTimeout : 60000,

    browsers: ["Chrome"]
  });
};
