const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
    if(err) {
        return console.log('Unable to connect to the mongodb server')
    }
    const db = client.db('TodoApp')

db.collection('Users').find({location : "santacruzz"}).toArray().then((docs)=> {
    console.log(JSON.stringify(docs,undefined,2))
}, (err) => {
    if(err) {
        console.log(err)
    }
})

}) 