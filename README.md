# hapi-webpack-middleware

[![npm version](https://badge.fury.io/js/%40danielbayerlein%2Fhapi-webpack-middleware.svg)](https://badge.fury.io/js/%40danielbayerlein%2Fhapi-webpack-middleware)
[![Build Status](https://travis-ci.org/danielbayerlein/hapi-webpack-middleware.svg?branch=master)](https://travis-ci.org/danielbayerlein/hapi-webpack-middleware)

**hapi-webpack-middleware** is a [webpack](https://github.com/webpack/webpack) middleware for [hapi.js](https://github.com/hapijs/hapi).

:warning: This middleware is automatically disabled in production!

Full support for:

* [webpack](https://webpack.github.io/docs/configuration.html#configuration-object-content)
* [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
* [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

## Installation

```bash
$ npm install webpack webpack-dev-middleware webpack-hot-middleware @danielbayerlein/hapi-webpack-middleware --save-dev
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

* [webpack](https://github.com/webpack/webpack-dev-middleware#usage)
* [webpackDev](https://github.com/webpack/webpack-dev-middleware#usage)
* [webpackHot](https://github.com/glenjamin/webpack-hot-middleware/blob/072b1475e45cc94df4cab99907c538283ce1fafa/middleware.js#L8-L10)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new [Pull Request](../../pull/new/master)

## Copyright

Copyright (c) 2016-2017 Daniel Bayerlein. See [LICENSE](./LICENSE.md) for details.
