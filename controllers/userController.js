var MongoClient = require('mongodb').MongoClient

module.exports.getUser = (req, res) => {     
    MongoClient.connect(process.env.dbConString, (err, client) => { 
        if (err) throw err    
        var db = client.db('socialdb')

        db.collection('users').find({}, { projection: { _id: 1, name:1, address:1, mobile:1 } }).toArray(function (err, data) {
            if (err) throw err
            res.status(200).json({ user: data });
        }); 

    });       
}

 
module.exports.createUser = (req, res) => {
    MongoClient.connect(process.env.dbConString, (err, client) => {
        if (err) throw err    
        var db = client.db('socialdb')

        var myobj = { name: "Jahurul Islam", address: "Jamalpur", mobile: "01915099950", email: "jahurul25@gmail.com" };
        db.collection("users").insertOne(myobj, function(err, result) {
            if (err) throw err;
            res.json({ status: "Data insert successful" })
        });

    }); 
    
}
 
module.exports.updateUser = (req, res) => {
    MongoClient.connect(process.env.dbConString, (err, client) => {
        if (err) throw err    
        var db = client.db('socialdb')
 
        db.collection("users").updateOne({mobile: "01915099950"},{$set: {name: "Islam 123", address: "Dhaka", mobile: "01812320549"}}, function(err, result) {
            if (err) throw err;
            res.json({ status: "Data update successful" })
        });

    });  
}
 
module.exports.deleteUser = (req, res) => {
    MongoClient.connect(process.env.dbConString, (err, client) => {
        if (err) throw err    
        var db = client.db('socialdb')
 
        db.collection("users").deleteOne({mobile: "01915099950"}, function(err, result) {
            if (err) throw err;
            res.json({ status: "Data delete successful" })
        });

    });  
}
