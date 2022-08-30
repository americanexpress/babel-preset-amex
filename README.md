<h1 align="center">
  <img src='https://github.com/americanexpress/babel-preset-amex/raw/main/babel-preset-amex.png' alt="Babel Preset Amex - One Amex" width='50%'/>
</h1>

[![npm](https://img.shields.io/npm/v/babel-preset-amex)](https://www.npmjs.com/package/babel-preset-amex)
![Health Check](https://github.com/americanexpress/babel-preset-amex/workflows/Health%20Check/badge.svg)

> Standard babel preset for American Express

## 👩‍💻 Hiring 👨‍💻

Want to get paid for your contributions to `babel-preset-amex`?
> Send your resume to oneamex.careers@aexp.com

## 📖 Table of Contents

* [Usage](#-usage)
* [Contributing](#-contributing)
* [License](#%EF%B8%8F-license)
* [Code of Conduct](#%EF%B8%8F-code-of-conduct)

## 🤹‍ Usage

### Installation

```bash
npm install --save-dev babel-preset-amex
```

### Add to your `.babelrc` file

```json
{
  "presets": ["amex"]
}
```

#### Options

By default `babel-preset-amex` will transpile for the "last 2 versions", "not dead" browsers, and CommonJS module syntax.

```json
{
  "presets": [[
    "amex",
    {
      "serverOnly": true,
      "modern": true,
      "moduleFormat": "esm"
    }
  ]]
}
```

`serverOnly` - Will transpile only for node.
`modern` - Will transpile for [common browsers](./browserlist.js) n-1.
`moduleFormat` - Will transpile to ECMAScript module syntax. Any string other than `"esm"` will transpile to CommonJS module syntax.

#### Customizing Babel Config

Babel Preset Amex includes the following:

Presets
- [preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [preset-react](https://babeljs.io/docs/en/babel-preset-react)

Plugins
- [plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)
- [plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [plugin-proposal-export-default-from](https://babeljs.io/docs/en/babel-plugin-proposal-export-default-from)
- [plugin-proposal-optional-chaining](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining)
- [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types)

If you wish to re-configure any of those presets do not redefine them
within your `.babelrc`. Instead you can configure them through the
`amex` preset.

```json
{
  "presets": [
    [
      "amex",
      {
        "preset-env": {},
        "preset-react": {}
      }
    ]
  ]
}
```


## 🏆 Contributing

We welcome Your interest in the American Express Open Source Community on Github.
Any Contributor to any Open Source Project managed by the American Express Open
Source Community must accept and sign an Agreement indicating agreement to the
terms below. Except for the rights granted in this Agreement to American Express
and to recipients of software distributed by American Express, You reserve all
right, title, and interest, if any, in and to Your Contributions. Please [fill
out the Agreement](https://cla-assistant.io/americanexpress/babel-preset-amex).

Please feel free to open pull requests and see [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to get started contributing.

## 🗝️ License

Any contributions made under this project will be governed by the [Apache License 2.0](./LICENSE.txt).

## 🗣️ Code of Conduct

This project adheres to the [American Express Community Guidelines](./CODE_OF_CONDUCT.md).
By participating, you are expected to honor these guidelines.