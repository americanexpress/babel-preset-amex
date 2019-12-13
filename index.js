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

const envPreset = require('@babel/preset-env');
const reactPreset = require('@babel/preset-react');
const syntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import').default;
const proposalClassProperties = require('@babel/plugin-proposal-class-properties').default;
const exportDefaultFrom = require('@babel/plugin-proposal-export-default-from').default;
const proposalOptionalChaining = require('@babel/plugin-proposal-optional-chaining').default;

const { browserlist, legacyBrowserList } = require('./browserlist');

module.exports = () => ({
  env: {
    modern: {
      presets: [
        [envPreset, {
          targets: {
            browsers: browserlist,
            node: '10.13.0',
          },
        }],
      ],
    },
  },
  presets: [
    [envPreset, {
      targets: {
        browsers: legacyBrowserList,
        node: '10.13.0',
      },
    }],
    reactPreset,
  ],
  plugins: [
    syntaxDynamicImport,
    proposalClassProperties,
    exportDefaultFrom,
    proposalOptionalChaining,
  ],
});
