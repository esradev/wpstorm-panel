const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const path = require("path");

module.exports = {
  ...defaultConfig,
  resolve: {
    ...defaultConfig.resolve,
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  plugins: [
    ...defaultConfig.plugins,
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: "localhost",
      port: 3000,
      proxy: "http://wpstorm-panel.local/"
    })
  ]
};
