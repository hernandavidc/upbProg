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
          console.log(b);
          return res.view({"blogs": b});
      });
   },
   listarBlogs: function(req, res)
    {
      Blog.findOne({id: req.param("id")}, function(err, found){
        console.log(found);
        console.log("puto el que lo lea");
         res.send(found);
      })
    }
 };
