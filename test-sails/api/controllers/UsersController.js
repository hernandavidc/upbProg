/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
	 herni: function(req, res)
 {
 	res.send("Hernan Alvarez Caballero - 000270656");
},
getQuote: function(req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    },

    getProtectedQuote: function(req, res) {
        return res.json({ quote: quoter.getRandomOne() });
    }

 };
