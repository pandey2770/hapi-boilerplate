const { Server } = require('hapi');
const Good = require('good');
const Basic = require('hapi-auth-basic');
const Routes = require('./routes');
const Config = require('./config');
const { validate } = require('./service/auth');
const { initialize } = require('./model');

const server = new Server();
server.connection(Config.connOptions);

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }
  server.route(Config.indexRoute);
});

server.register([{
  register: Good,
  options: Config.loggingOptions,
}, Basic], (err) => {
  if (err) {
    throw err;
  }
  initialize
  .then(() => {
    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.route(Routes);
    server.start((errStart) => {
      if (errStart) {
        throw errStart;
      }
      console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
    });
  }).catch((e) => {
    throw e;
  });
});
