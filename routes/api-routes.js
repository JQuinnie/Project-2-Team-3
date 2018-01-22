// Set up routes for displaying and saving data to the db

// Setting up dependencies
var db = require('../models');

// Setting up routes
module.exports = function (app) {

  // GET route for getting all of the different cryptocoin data
  //db.findAll
  app.get('/api/coins', function (req, res) {
    db.Coins.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  // GET route for retrieving data on a single cyptocoin
  //db.findOne
  app.get('/api/coins/:id', function (req, res) {
    db.Coins.findOne({
      where: {
        coin_id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    })
  });

}
