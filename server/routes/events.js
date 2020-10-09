var express = require("express");
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://user1:PlantLanta@cluster0.5gnw5.mongodb.net/';

router.get("/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Events');
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


router.get("/:eventId/", function(req, res) {
    console.log('getting one event');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Events');
            var eventId = req.params.eventId;
            try {
                collection.findOne({_id: ObjectId(eventId)}, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result) {
                        console.log('Matching event found--sending to frontend');
                        res.send(result);
                    } else {
                        console.log('No matching event found');
                        res.send(404);
                    }
                });
            } catch (err) {
                console.log('error creating MongoDB ObjectId');
                console.log(err);
                res.send(404);
            }
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
            var collection = db.collection('Events');
            collection.insertOne(req.body);
            res.send(200);
            client.close();
        }
    });
});


router.put("/:eventId/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            console.log("\n\nMAKING PUT:");
            console.log(req.body);
            var db = client.db('PlantLanta');
            var collection = db.collection('Events');
            var eventId = req.params.eventId;
            try {
                const filter = {_id: ObjectId(eventId)};
                const updateDoc = {$set: req.body};
                collection.findOneAndUpdate(filter, updateDoc, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result != null) {
                        console.log('Matching event found--updating document');
                        res.send(result);
                    } else {
                        console.log('No matching event found');
                        res.send(404);
                    }
                });
            } catch (err) {
                console.log(err);
                res.send(404);
            }
            client.close();
        }
    });
});


router.delete("/:eventId/", function(req, res) {
    console.log('deleting one user');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Events');
            var eventId = req.params.eventId;
            try {
                collection.findOneAndDelete({_id: ObjectId(eventId)}, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result.value != null) {
                        console.log('Matching event found--deleting from DB');
                        res.send(result);
                    } else {
                        console.log('No matching event found');
                        res.send(404);
                    }
                });
            } catch (err) {
                console.log('error creating MongoDB ObjectId');
                console.log(err);
                res.send(404);
            }
            client.close();
        }
    });
});

module.exports = router;
