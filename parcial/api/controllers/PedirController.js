/**
 * PedirController
 *
 * @description :: Server-side logic for managing pedirs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
   {
		 var url = 'http://localhost:8080/blog';

	  http.get(url, function(res) {
	       var fbResponse = JSON.parse(res)
	       console.log("Got response: " + fbResponse);
	     }).on('error', function(e) {
	       console.log("Got error: " + e.message);
	  });
   }
};
