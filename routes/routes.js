var mongo = require("../models/request.js")

exports.mongo = function(req, res){ // insert the only needed operation
	console.log("req.query is "+JSON.stringify(req.query));
    mongo.insert( 'recommendations', // collection
                  req.query,
                  function(model) { 
                    res.render('mongo', {title: 'Mongo Demo', obj: model});
                    }
                  );
    console.log("at end of insert case");
	break;
}

	// In the case that no route has been matched
exports.errorMessage = function(req, res){
  var message = '<p>Error, did not understand path '+req.path+"</p>";
	// Set the status to 404 not found, and render a message to the user.
  res.status(404).send(message);
};