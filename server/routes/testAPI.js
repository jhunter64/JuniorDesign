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
            var collection = db.collection('testCollection');
            collection.findOne({test: "test data"}, function(err, result) {
                if (err) {
                    res.send(404);
                } else {
                    res.send(result);
                }
            });
            client.close();
        }
    });
});

module.exports = router;
