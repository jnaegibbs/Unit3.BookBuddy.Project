module.exports = {
    moduleNameMapper: {
      "\\.css$": "identity-obj-proxy",
    },
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.css$': 'some-css-transformer',
      }
  };

 