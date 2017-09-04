/**
 * PedirController
 *
 * @description :: Server-side logic for managing pedirs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
   {

		 var http = require('http');
		 var rutas = ['http://10.152.164.150:3000/', 'http://127.0.0.1:3000/blog'];
		 var result = '';
		 rutas.forEach(function(ruta) {
			    result = pedir(ruta);
			});
		 /**
		var request = require('request');

		request.get({
		  url: 'http://localhost:8080/'
		}, function(error, response, body) {
		  if (error) {
		    sails.log.error(error);
		  }
		  else {
		    sails.log.info(response);
		  }
		});*/
		function pedir(url){
			http.get(url, function(res) {
 		      var body = '';
 					var result = '';
 		      res.on('data', function(chunk) {
 		         body += chunk;
 		      });
 		      res.on('end', function() {
 		        result = JSON.parse(body)
 						responder(result);
 		      });
 		    }).on('error', function(e) {
 		      console.log("Error: " + e.message);
 		 });
		}
			function responder(result){
				sails.log(result);
				return result;
			}
   }
};
