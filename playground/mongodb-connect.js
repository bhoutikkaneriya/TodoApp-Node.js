// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')


MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err, client) => {
    if(err) {
        return console.log('Unable to connect to the mongodb server')
    }
    const db = client.db('TodoApp')
// db.collection('Todos').insertOne(
//     {
//         text: 'something to do',
//         completed: false
//     }
//     ,(err,result) => {
//     if(err) {
//         return console.log('Unable to insert todo',err)
//     }
//     console.log(JSON.stringify(result,undefined,2))
// })

db.collection('Users').insertOne({
    name : 'bhoutik',
    age: 27,
    location : 'santacruzz'
}, (err,result) => {
    if(err) {
        return console.log('Unable to add document')
    }
    console.log(result.ops[0]._id)
})


client.close();
}) 