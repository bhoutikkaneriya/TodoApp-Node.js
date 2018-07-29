const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log(err)
    }
    const db = client.db('TodoApp')
    db.collection('Todos').findOneAndUpdate({"name" : "bhoutik"},{$set:{age:27}},{returnOriginal:false}).then((result) => {
        console.log(result)
    })

})