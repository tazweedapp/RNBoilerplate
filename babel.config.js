module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
        },
      },
    ],
  ],
};
