const { Server } = require('hapi');
const Good = require('good');
const Basic = require('hapi-auth-basic');
const Route = require('./conf/route');
const Config = require('./conf/app-config');
const Auth = require('./service/auth');

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
  server.auth.strategy('simple', 'basic', { validateFunc: Auth.validate });
  server.route(Route);
  server.start((errStart) => {
    if (errStart) {
      throw errStart;
    }
    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
  });
});
