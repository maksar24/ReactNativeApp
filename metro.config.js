const { getDefaultConfig } = require("@expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.assetExts.push("cjs");
defaultConfig.resolver.extraNodeModules = {
  "@reduxjs/toolkit": require.resolve("@reduxjs/toolkit"),
};

module.exports = defaultConfig;
