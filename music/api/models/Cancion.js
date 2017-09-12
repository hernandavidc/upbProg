/**
 * Cancion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    duracion: {
      type: 'integer'
    },
    genero: {
      type: 'string'
    },
    direccionCancion: {
      type: 'string'
    },
    // Add a reference to User
    users: {
      collection: 'user',
      via: 'canciones'
    }
  }
};
