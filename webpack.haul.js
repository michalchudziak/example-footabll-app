const path = require('path');

module.exports = ({ platform, root }, defaults) => ({
  entry: `./index.${platform}.js`,
  resolve: {
    ...defaults.resolve,
    alias: {
      ...defaults.resolve.alias,
      components: path.join(root, 'src', 'components'),
      containers: path.join(root, 'src', 'containers'),
      stores: path.join(root, 'src', 'stores'),
      routes: path.join(root, 'src', 'routes.js'),
    }
  },
});
