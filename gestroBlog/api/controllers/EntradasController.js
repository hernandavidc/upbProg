/**
 * EntradasController
 *
 * @description :: Server-side logic for managing Entradas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
   detalleEntrada: function(req, res)
    {
      Entradas.findOne({id: req.param("idEntrada")}).exec(function (err, found){
        if (err) {
          return res.serverError(err);
        }
        if (!found) {
          return res.notFound('Could not find, sorry.');
        }
        sails.log('Found "%s"', found);
        return res.view('entradas/entrada', {
          "Entrada": found
        });
      });
    }
 };
