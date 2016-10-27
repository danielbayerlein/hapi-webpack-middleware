/* eslint-disable import/no-unresolved */
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware');
/* eslint-enable import/no-unresolved */
const pkg = require('../package.json');

exports.register = function register(server, options, next) {
  const compiler = new Webpack(options.webpack);
  const webpackDevConfig = options.webpackDev || {};
  const webpackHotConfig = options.webpackHot || {};

  function registerMiddleware(middleware, request, reply) {
    middleware(request.raw.req, request.raw.res, (error) => {
      if (error) {
        return reply(error);
      }

      return reply.continue();
    });
  }

  server.ext('onRequest', (request, reply) => {
    // eslint-disable-next-line new-cap
    const webpackDevMiddleware = WebpackDevMiddleware(compiler, webpackDevConfig);
    registerMiddleware(webpackDevMiddleware, request, reply);

    // eslint-disable-next-line new-cap
    const webpackHotMiddleware = WebpackHotMiddleware(compiler, webpackHotConfig);
    registerMiddleware(webpackHotMiddleware, request, reply);
  });

  return next();
};

exports.register.attributes = {
  pkg,
};
