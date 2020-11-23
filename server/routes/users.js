var express = require("express");
var router = express.Router();
var ObjectId = require('mongodb').ObjectId;
const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb+srv://user1:PlantLanta@cluster0.5gnw5.mongodb.net/';

router.get("/", function(req, res) {
    console.log('getting all users');
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


router.get("/:userId/", function(req, res) {
    console.log('getting one user');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var userId = req.params.userId;
            try {
                collection.findOne({_id: ObjectId(userId)}, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result) {
                        console.log('Matching user found--sending to frontend');
                        res.send(result);
                    } else {
                        console.log('No matching user found');
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

router.get("/googleLogin/:email/", function(req, res) {
    console.log('getting one user');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var email = req.params.email;
            try {
                collection.findOne({email: email}, function(err, result) {
                    console.log(result);
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result) {
                        console.log('Matching Google user found--sending to frontend');
                        res.send(result);
                    } else {
                        console.log('No matching Google user found');
                        res.send({});
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


router.post("/logIn/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var email = req.body.email;
            var password = req.body.password;
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


router.post("/", function(req, res) {
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
            res.send(200);
            client.close();
        }
    });
});


router.put("/:userId/", function(req, res) {
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            console.log("\n\nMAKING PUT:");
            console.log(req.body);
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var userId = req.params.userId;
            try {
                const filter = {_id: ObjectId(userId)};
                const updateDoc = {$set: req.body};
                collection.findOneAndUpdate(filter, updateDoc, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result != null) {
                        console.log('Matching user found--updating document');
                        res.send(result);
                    } else {
                        console.log('No matching user found');
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


router.delete("/:userId/", function(req, res) {
    console.log('deleting one user');
    MongoClient.connect(uri, { useNewUrlParser: true }, {useUnifiedTopology: true }, function(err, client) {
        if (err) {
            console.log('ERROR CONNECTING TO MONGO');
            res.send(404);
        } else {
            var db = client.db('PlantLanta');
            var collection = db.collection('Users');
            var userId = req.params.userId;
            try {
                collection.findOneAndDelete({_id: ObjectId(userId)}, function(err, result) {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else if (result.value != null) {
                        console.log('Matching user found--deleting from DB');
                        res.send(result);
                    } else {
                        console.log('No matching user found');
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
