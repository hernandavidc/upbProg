/**
 * Articulo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      autor:{
        type: 'string',
        required: true
      },
      titulo:{
        type: 'string',
        required: true
      },
      cuerpo:{
        type: 'string',
        required: true
      },
      fecha:{
        type: 'date',
        required: true
      }
  }
};
