const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017', (err,client) => {
    if(err) {
        return console.log(err)
    }
    const db = client.db('TodoApp')
    db.collection('Todos').findOneAndDelete({"name":"veeru"}).then((err,result) => {
        if(err) {
            return console.log(err)
        }
        console.log(result)
    })

})