/**
 * BlogController
 *
 * @description :: Server-side logic for managing Blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 	index: function(req, res)
   {
    Blog.find().exec(function(err, b)
      {
        if(err){
          console.log(err);
        }
        sails.log('Found "%s"', b);
          return res.json(b);
      });
   },
   listarBlogs: function(req, res)
    {
      Blog.findOne({id: req.param("id")}).populate('Entradas').exec(function (err, found){
        if (err) {
          return res.serverError(err);
        }
        if (!found) {
          return res.notFound('Could not find Finn, sorry.');
        }
        sails.log('Found "%s"', found);
          return res.json(found);
        });
      }
    };
