module.exports = (app) => {
  app.use('/v0.1', require('./handlers/customers'))
};