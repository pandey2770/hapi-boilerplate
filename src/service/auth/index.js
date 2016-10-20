// @flow

const Bcrypt = require('bcrypt');

const users = {
  // todo: move user to db
    john: {
        username: 'john',
        password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',
        name: 'John Doe',
        id: '2133d32a'
    }
};

module.exports = {
    validate: (request: Object, username: string, password: string, callback: Function) => {

        const user = users[username];
        if (!user) {
            return callback(null, false);
        }

        Bcrypt.compare(password, user.password, (err, isValid) => {

            callback(err, isValid, { id: user.id, name: user.name });
        });
        return undefined;
    }
};
