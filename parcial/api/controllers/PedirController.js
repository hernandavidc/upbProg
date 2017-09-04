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
		 var url1 = 'http://10.152.164.150:3000';
		 var url2 = 'http://10.152.164.121:8080';

		 http.get(url1, function(res) {
		      var body = '';
					var result = '';
		      res.on('data', function(chunk) {
		         body += chunk;
		      });
		      res.on('end', function() {
		        result = JSON.parse(body)
						traer1 = result;
						http.get(url2, function(res) {
			 		      var body = '';
			 					var result2 = '';
			 		      res.on('data', function(chunk) {
			 		         body += chunk;
			 		      });
			 		      res.on('end', function() {
			 		        result2 = JSON.parse(body)
			 						traer2 = result2;
			 						responder(result,result2);
			 		      });
			 		    }).on('error', function(e) {
			 		      console.log("Error: " + e.message);
			 		 });

					//responder(result);
		      });
		    }).on('error', function(e) {
		      console.log("Error: " + e.message);
		 });



			function responder(result1,result2){
				console.log(JSON.stringify(result1)+ "------" + JSON.stringify(result2));
				return res.send(JSON.stringify(result1)+ "\n" + JSON.stringify(result2));
			}
   }
};
