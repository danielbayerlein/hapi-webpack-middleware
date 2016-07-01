const Webpack = require('webpack'); // eslint-disable-line import/no-unresolved
const pkg = require('../package.json');

exports.register = function register(server, options, next) {
  if (process.env.NODE_ENV === 'production') {
    return next();
  }

  /* eslint-disable import/no-unresolved  */
  /* eslint-disable global-require  */
  const WebpackDevMiddleware = require('webpack-dev-middleware');
  const WebpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-disable global-require  */
  /* eslint-enable import/no-unresolved */

  const webpackConfig = options.webpack || {};
  const webpackDevConfig = options.webpackDev || {};
  const webpackHotConfig = options.webpackHot || {};

  const compiler = new Webpack(webpackConfig);
  /* eslint-disable new-cap */
  const webpackDevMiddleware = WebpackDevMiddleware(compiler, webpackDevConfig);
  const webpackHotMiddleware = WebpackHotMiddleware(compiler, webpackHotConfig);
  /* eslint-enable new-cap */

  function addMiddleware(middleware, raw, reply) {
    const req = raw.req;
    const res = raw.res;

    middleware(req, res, error => {
      if (error) {
        return reply(error);
      }

      return reply.continue();
    });
  }

  server.ext('onRequest', (request, reply) => {
    addMiddleware(webpackDevMiddleware, request.raw, reply);
  });

  server.ext('onRequest', (request, reply) => {
    addMiddleware(webpackHotMiddleware, request.raw, reply);
  });

  return next();
};

exports.register.attributes = {
  pkg,
};
