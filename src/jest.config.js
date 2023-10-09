module.exports = {
    moduleNameMapper: {
      "\\.css$": "identity-obj-proxy",
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(my-package-to-transform)/)',
      ],
  };