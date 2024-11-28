module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'], // Define the root of your project
        alias: {
          '@': './src', // Define the alias to point to the src directory
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
  presets: ['module:@react-native/babel-preset'],
};
