const Webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')
const WebpackHotMiddleware = require('webpack-hot-middleware')
const pkg = require('../package.json')

exports.register = function register (server, options, next) {
  const compiler = new Webpack(options.webpack)
  const webpackDevConfig = options.webpackDev || {}
  const webpackHotConfig = options.webpackHot || {}

  function registerMiddleware (middleware, request, reply) {
    middleware(request.raw.req, request.raw.res, (error) => {
      if (error) {
        return reply(error)
      }

      return reply.continue()
    })
  }

  server.ext('onRequest', (request, reply) => {
    const webpackDevMiddleware = WebpackDevMiddleware(compiler, webpackDevConfig)
    registerMiddleware(webpackDevMiddleware, request, reply)

    const webpackHotMiddleware = WebpackHotMiddleware(compiler, webpackHotConfig)
    registerMiddleware(webpackHotMiddleware, request, reply)
  })

  return next()
}

exports.register.attributes = {
  pkg
}
