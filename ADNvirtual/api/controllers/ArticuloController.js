/**
 * ArticuloController
 *
 * @description :: Server-side logic for managing articuloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res)
{
 res.send("index");
},
get: function(req, res)
{
 res.send("get " + req.param("id"));
},
create: function(req, res)
{
 res.send("create");
},
update: function(req, res)
{
 res.send("update");
}
};
