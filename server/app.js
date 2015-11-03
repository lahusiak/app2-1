var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/employeeDb');

var Person = mongoose.model('Person', new Schema({'firstName':String, 'lastName':String, 'salary':String, 'yearsService':String}, {collection:'employeeDb'}));

app.set("port", process.env.PORT || 5000);

app.route('/data').get(function (req, res) {
              console.log('/data was sent this should show up on the server console');

              Person.find({}, function (err, data) {
                  res.send(data);
              });
            })
            .delete(function () {
                  //Person.findByIdAndRemove(req.body.id, function(){});
            });

app.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
    console.log("Meow", app.get("port"));
});
