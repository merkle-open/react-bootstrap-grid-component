const path = require("path");
module.exports = (config, configType) => {
  config.module.rules.push({
    test: /\.s?css$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      }
    ],
    include: path.resolve(__dirname, "../")
  });
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};