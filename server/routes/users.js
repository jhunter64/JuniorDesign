var express = require("express");
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://user1:PlantLanta@cluster0.5gnw5.mongodb.net/';

router.get("/", function(req, res, next) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
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

router.post("/", function(req, res, next) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            console.log("\n\nMAKING POST:");
            console.log(req.body);
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            collection.insertOne(req.body);
            client.close();
        }
    });
});

module.exports = router;
