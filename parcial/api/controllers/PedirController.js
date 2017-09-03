/**
 * PedirController
 *
 * @description :: Server-side logic for managing pedirs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
   {

		 var url = 'http://localhost:3000/blog';

	  require("http").get(url, function(res) {
	       var r = JSON.parse(res)
	       console.log("Got response: " + r);
				 return res.json(r);
	     }).on('error', function(e) {
	       console.log("Got error: " + e.message);
				 return res.json(e.message);
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
