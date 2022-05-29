/*
 * Copyright (c) 2017 American Express Travel Related Services Company, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

const { declare } = require('@babel/helper-plugin-utils');
const envPreset = require('@babel/preset-env');
const reactPreset = require('@babel/preset-react');
const syntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import').default;
const proposalClassProperties = require('@babel/plugin-proposal-class-properties').default;
const exportDefaultFrom = require('@babel/plugin-proposal-export-default-from').default;
const proposalOptionalChaining = require('@babel/plugin-proposal-optional-chaining').default;
const removePropTypes = require('babel-plugin-transform-react-remove-prop-types').default;
const { browserList, legacyBrowserList } = require('./browserlist');

/**
 * babel-preset-amex is the standard Babel preset for American Express.
 *
 * @param api The Babel plugin API.
 * @param options The preset options.
 */
module.exports = declare(/** @type BabelConfigFunction */ (api, options) => {
  const serverOnly = options.serverOnly || (api.env && api.env('server'));
  const isModern = options.modern || (api.env && api.env('modern'));
  const isProduction = process.env.NODE_ENV === 'production';
  const plugins = [
    syntaxDynamicImport,
    proposalClassProperties,
    exportDefaultFrom,
    proposalOptionalChaining,
  ];
  if (isProduction) {
    plugins.push(removePropTypes);
  }

  const targets = {
    node: 'current',
  };

  if (!serverOnly) {
    targets.browsers = isModern ? browserList : legacyBrowserList;
  }

  const presetEnvOptions = {

    targets,
    ...options['preset-env'],
    ...options.moduleFormat === 'esm' && { modules: false },
  };

  const reactPresetOptions = { ...options['react-preset'] };

  return {
    presets: [
      [
        envPreset,
        presetEnvOptions,
      ],
      [
        reactPreset,
        reactPresetOptions,
      ],
    ],
    plugins,
  };
});

/** @typedef {import('@babel/core').ConfigFunction} BabelConfigFunction */
