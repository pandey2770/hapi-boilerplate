const Hapi = require('hapi');
const Good = require('good');
const Basic = require('hapi-auth-basic');
const product = require('./models/product');
const user = require('./models/user');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    },
  });
});

server.register([{
  register: Good,
  options: {
    reporters: {
      console: [{
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{
          response: '*',
          log: '*',
        }],
      }, {
        module: 'good-console',
      }, 'stdout'],
    },
  },
}, Basic], (err) => {
  if (err) {
    throw err;
  }

  server.auth.strategy('simple', 'basic', { validateFunc: user.validate });

  server.route({
    method: 'GET',
    path: '/product',
    config: {
      auth: 'simple',
      handler: product.fetchProduct,
    },
  });

  server.start((errStart) => {
    if (errStart) {
      throw errStart;
    }

    console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line no-console
  });
});
