module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            'screens': './screens',
            'navigation': './navigation',
            'components': './components',
            'lib': './lib',
            'hooks': './lib/hooks',
            'assets': './assets',
            'constants': './lib/constants',
            'modules': './modules',
            'contexts': './lib/contexts',
            'services': './services',
            'concepts': './concepts',
          },
        },
      ],
    ],
  };
};
