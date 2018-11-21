const { MongoClient } = require('mongodb')

const mongoFind = (url, dbName, collection) => {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) console.loh(err);
        
        let db = client.db(dbName)
        db.collection(collection).find({}).sort({$natural: -1}).toArray((err, docs) => {
            if (err) console.log(err)
            console.log(docs)
            client.close()
        });
    })
}

const mongoInsert = (url, dbName, collection, data) => {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) console.log(err)

        let db = client.db(dbName)
        db.collection(collection).insert(data, (err, result) => {
            if (err) console.log(err)
            console.log(result)
            client.close()
        })
    })
}

const mongoDeleteOne = (url, dbName, collection) => {
    MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
        if (err) console.log(err)

        let db = client.db(dbName)
        db.collection(collection).deleteOne({}, (err, result) => {
            if (err) console.log(err)
            console.log(result.result)
            client.close()
        })
    })
}

module.exports.mongoFind = mongoFind
module.exports.mongoInsert = mongoInsert
module.exports.mongoDeleteOne = mongoDeleteOne