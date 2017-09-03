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
		 var url = 'http://maps.googleapis.com/maps/api/geocode/json?address=google';

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
			function responder(result){
				console.log(result);
				return res.json(result);
			}
   }
};
