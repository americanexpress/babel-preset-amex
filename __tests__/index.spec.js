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

describe('babel-preset-amex', () => {
  it('exports a function', () => {
    expect(preset).toEqual(expect.any(Function));
    expect(preset()).toEqual(expect.any(Object));
  });

  it('includes setting for modern browsers', () => {
    expect(preset().env.modern).toEqual(expect.any(Object));
  });

  it('includes an array of presets', () => {
    expect(preset().presets).toEqual(expect.any(Array));
    expect(preset().presets.length).toBe(2);
    preset().presets.forEach(p => expect(p).toEqual(expect.any(Object)));
  });

  it('includes an array of plugins', () => {
    expect(preset().plugins).toEqual(expect.any(Array));
    expect(preset().plugins.length).toBe(3);
    preset().plugins.forEach((plugin) => {
      // It should be either a function
      try {
        expect(plugin).toEqual(expect.any(Function));
        return;
      } catch (e) { /* do nothing */ }

      // or an array containing a function and an object
      expect(plugin).toEqual(expect.any(Array));
      expect(plugin.length).toBe(2);
      expect(plugin[0]).toEqual(expect.any(Function));
      expect(plugin[1]).toEqual(expect.any(Object));
    });
  });
});
