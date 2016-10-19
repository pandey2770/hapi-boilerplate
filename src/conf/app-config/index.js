module.exports = {
  connOptions: { port: 3000 },
  indexRoute: {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply.file('./public/index.html');
    },
  },
  loggingOptions: {
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
};
