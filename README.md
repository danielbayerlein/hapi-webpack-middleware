# hapi-webpack-middleware

[![npm version](https://badge.fury.io/js/%40danielbayerlein%2Fhapi-webpack-middleware.svg)](https://badge.fury.io/js/%40danielbayerlein%2Fhapi-webpack-middleware)
[![Build Status](https://travis-ci.org/danielbayerlein/hapi-webpack-middleware.svg?branch=master)](https://travis-ci.org/danielbayerlein/hapi-webpack-middleware)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/danielbayerlein/hapi-webpack-middleware.svg)](https://greenkeeper.io/)

**hapi-webpack-middleware** is a [webpack](https://github.com/webpack/webpack) middleware for [hapi.js](https://github.com/hapijs/hapi).

:warning: Use this middleware only in development!

Full support for:

* [webpack](https://webpack.js.org)
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
* [webpack-hot-middleware](https://github.com/webpack-contrib/webpack-hot-middleware)

## Installation

```bash
npm install webpack webpack-dev-middleware webpack-hot-middleware @danielbayerlein/hapi-webpack-middleware --save-dev
```

## Usage

```javascript
server.register({
  register: require('@danielbayerlein/hapi-webpack-middleware'),
  options: {
    webpack: {},
    webpackDev: {},
    webpackHot: {}
  }
}, (err) => {

  if (err) {
    throw err;
  }
});
```

## Configuration

* [webpack](https://webpack.js.org/concepts/configuration/)
* [webpackDev](https://github.com/webpack/webpack-dev-middleware#usage)
* [webpackHot](https://github.com/webpack-contrib/webpack-hot-middleware/blob/master/middleware.js#L8-L10)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new [Pull Request](../../pull/new/master)

## Copyright

Copyright (c) 2016-present Daniel Bayerlein. See [LICENSE](./LICENSE.md) for details.
