/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    edad: {
      type: 'integer'
    },
    email: {
      type: 'email',
      unique: true
    },

    // Add a reference to canciones
    canciones: {
      collection: 'cancion',
      via: 'users',
      dominant: true
    }
  }
};
