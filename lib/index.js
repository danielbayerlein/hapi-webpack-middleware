/* eslint-disable import/no-unresolved */
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
/* eslint-enable import/no-unresolved */
const pkg = require('../package.json');

exports.register = function register(server, options, next) {
  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  const webpackConfig = options.webpack || {};
  const webpackDevConfig = options.webpackDev || {};
  const webpackHotConfig = options.webpackHot || {};

  const compiler = new Webpack(webpackConfig);
  /* eslint-disable new-cap */
  const webpackDevMiddleware = WebpackDevMiddleware(compiler, webpackDevConfig);
  const webpackHotMiddleware = WebpackHotMiddleware(compiler, webpackHotConfig);
  /* eslint-enable new-cap */

  server.ext('onRequest', (request, reply) => {
    const req = request.raw.req;
    const res = request.raw.res;

    webpackDevMiddleware(req, res, error => {
      if (error) {
        return reply(error);
      }

      return reply.continue();
    });
  });

  server.ext('onRequest', (request, reply) => {
    const req = request.raw.req;
    const res = request.raw.res;

    webpackHotMiddleware(req, res, error => {
      if (error) {
        return reply(error);
      }

      return reply.continue();
    });
  });

  return next();
};

exports.register.attributes = {
  pkg,
};
