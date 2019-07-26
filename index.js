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
const lodash = require('babel-plugin-lodash');
const syntaxDynamicImport = require('@babel/plugin-syntax-dynamic-import').default;
const proposalClassProperties = require('@babel/plugin-proposal-class-properties').default;


module.exports = () => ({
  presets: [
    [envPreset, {
      targets: {
        browsers: ['last 2 versions', 'not dead'],
        node: '10.13.0',
      },
    }],
    reactPreset,
  ],
  plugins: [
    [lodash, { id: ['lodash', 'recompose'] }],
    syntaxDynamicImport,
    proposalClassProperties,
  ],
});
