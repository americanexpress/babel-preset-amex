const preset = require('..');

describe('babel-preset-amex', () => {
  it('exports an object', () => {
    expect(preset).toEqual(expect.any(Object));
  });

  it('includes an array of presets', () => {
    expect(preset.presets).toEqual(expect.any(Array));
    preset.presets.forEach(p => expect(p).toEqual(expect.any(Object)));
  });

  it('includes an array of plugins', () => {
    expect(preset.plugins).toEqual(expect.any(Array));
    preset.plugins.forEach(plugin => expect(plugin).toEqual(expect.any(Function)));
  });
});
