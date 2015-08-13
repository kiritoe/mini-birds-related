var User = require('../models/User');

module.exports = {

 create: function(req, res) {
 	var newUserDocument = new User(req.body);
 	newUserDocument.save(function(err, result){
 		if (err) return res.status(500).send(err);
 		return res.send(result);
 	})
},

 read: function(req, res) {
    User
    .find(req.query)
    .select('username level')
    .sort('level: 1')


    query.exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  update: function(req, res) {
  	User.findByIdAndUpdate(
  		req.params.id,
  		req.body,
  		 if (err) return res.status(500).send(err);
      res.send(result);
  		);
  },
  
update: function(req, res) {
  	User.findByIdAndUpdate(
  		req.params.id,
  		req.body,
  		 if (err) return res.status(500).send(err);
      res.send(result);
  		);
  },



};


