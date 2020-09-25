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

router.post("/logIn/", function(req, res, next) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var email = req.body.email;
            var password = req.body.password;
            console.log('body: ', req.body);
            console.log('email: ', email);
            console.log('password: ', password);
            collection.findOne({email: email, password: password}, function(err, result) {
                if (err) {
                    console.log(err);
                    throw err;
                } else if (result) {
                    console.log('Matching user found--logging in');
                    res.send(result);
                } else {
                    console.log('No matching user found');
                    res.send(404);
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
