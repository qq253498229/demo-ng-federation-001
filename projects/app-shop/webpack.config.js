const {shareAll, withModuleFederationPlugin} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'app-shop',

  exposes: {
    './ShopModule': './projects/app-shop/src/app/modules/shop/shop.module.ts',
  },

  shared: {
    ...shareAll({singleton: true, strictVersion: true, requiredVersion: 'auto'}),
  },

});
