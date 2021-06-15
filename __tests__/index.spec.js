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

const preset = require('..');

jest.mock('@babel/preset-env', () => ({ default: '@babel/preset-env' }));
jest.mock('@babel/preset-react', () => ({ default: '@babel/preset-react' }));
jest.mock('@babel/plugin-syntax-dynamic-import', () => ({ default: '@babel/plugin-syntax-dynamic-import' }));
jest.mock('@babel/plugin-proposal-class-properties', () => ({ default: '@babel/plugin-proposal-class-properties' }));
jest.mock('@babel/plugin-proposal-export-default-from', () => ({ default: '@babel/plugin-proposal-export-default-from' }));
jest.mock('@babel/plugin-proposal-optional-chaining', () => ({ default: '@babel/plugin-proposal-optional-chaining' }));
jest.mock('babel-plugin-transform-react-remove-prop-types', () => ({ default: 'babel-plugin-transform-react-remove-prop-types' }));

describe('babel-preset-amex', () => {
  it('exports a function', () => {
    expect(preset).toEqual(expect.any(Function));
    expect(preset()).toEqual(expect.any(Object));
  });

  it('includes an array of presets', () => {
    expect(preset().presets).toEqual(expect.any(Array));
    expect(preset().presets.length).toBe(2);
    preset().presets.forEach(p => expect(p).toEqual(expect.any(Object)));
  });

  it('includes an array of plugins', () => {
    expect(preset().plugins).toEqual(expect.any(Array));
    expect(preset().plugins.length).toBe(4);
  });

  it('returns modern preset for env and option', () => {
    const presetModernOpt = preset({}, { modern: true });
    const presetModernEnv = preset({ env: envName => envName === 'modern' });
    expect(presetModernOpt).toMatchSnapshot();
    expect(presetModernEnv).toMatchSnapshot();
    expect(presetModernOpt).toEqual(presetModernEnv);
  });

  it('returns server only config when given serverOnly option', () => {
    const presetServerOnlyOpt = preset({}, { serverOnly: true });
    const presetServerEnv = preset({ env: envName => envName === 'server' });
    expect(presetServerOnlyOpt).toMatchSnapshot();
    expect(presetServerEnv).toMatchSnapshot();
    expect(presetServerOnlyOpt).toEqual(presetServerEnv);
  });

  it('allows options to be passed to plugins', () => {
    expect(preset({}, { 'preset-env': { exclude: ['@babel/plugin-transform-regenerator'] } })).toMatchSnapshot();
  });

  it('in production mode, includes an array of plugins', () => {
    const originalEnv = process.env;
    process.env = { NODE_ENV: 'production' };

    expect(preset().plugins).toEqual(expect.any(Array));
    expect(preset().plugins.length).toEqual(5);

    process.env = originalEnv;
  });
});
