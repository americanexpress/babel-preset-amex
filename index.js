const es2015Preset = require('babel-preset-es2015');
const reactPreset = require('babel-preset-react');
const stage0Preset = require('babel-preset-stage-0');
const addModuleExports = require('babel-plugin-add-module-exports');

module.exports = {
  presets: [
    es2015Preset,
    reactPreset,
    stage0Preset,
  ],
  plugins: [
    addModuleExports,
  ],
};
