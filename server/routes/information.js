var express = require("express");
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://user1:PlantLanta@cluster0.5gnw5.mongodb.net/';

router.get("/", function(req, res) {
    console.log("getting info");
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
      if (err) {
          console.log('ERROR CONNECTING TO MONGO');
          res.send(404);
      } else {
          var db = client.db('PlantLanta');
          var collection = db.collection('Information');
          collection.find({}).toArray(function(err, result) {
              if (err) {
                  console.log(err);
                  throw err;
              } else {
                  res.send(result);
              }
          });
        client.close();
        }
    });
});

router.post("/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            console.log("\n\nMAKING POST:");
            console.log(req.body);
            var db = client.db('PlantLanta');
            var collection = db.collection('Information');
            collection.insertOne(req.body);
            res.send(200);
            client.close();
        }
    });
});

router.post("/getInfo/", function(req, res) {
    console.log('getting one info section');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Information');
            collection.findOne({title: req.body.title}, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result) {
                        console.log('Matching info section found--sending to frontend');
                        res.send(result);
                    } else {
                        console.log('No matching info section found');
                        res.send(404);
                    }
            });
            client.close();
          }
    });
});

router.put("/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            console.log("\n\nMAKING PUT:");
            console.log(req.body);
            var db = client.db('PlantLanta');
            var collection = db.collection('Information');
            const filter = {title: req.body.title};
            const updateDoc = {$set: {text: req.body.text}};
            collection.findOneAndUpdate(filter, updateDoc, function(err, result) {
                if (err) {
                    console.log(err);
                    throw err;
                } else if (result != null) {
                    console.log('Matching info section found--updating document');
                    res.send(result);
                } else {
                    console.log('No matching info section found');
                    res.send(404);
                }
            });
            client.close();
        }
    });
});

module.exports = router;
