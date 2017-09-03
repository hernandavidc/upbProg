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
		      res.on('data', function(chunk) {
		         body += chunk;
		      });
		      res.on('end', function() {
		        var result = JSON.parse(body)
		        console.log(result);
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
   }
};
