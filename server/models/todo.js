const mongoose = require('mongoose')

// create a model, coz mongoose likes to be more organized.
const Todo = mongoose.model('Todo', {    //name of the model, schema
    text : {
        type : String,
        required :true,
        minlength : 1,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type: Number,
        default : null
    }
    });
    
    // var newTodo = new Todo({
    //     text : 'have lunch',
    //     completed : true,
    //     completedAt : 123
    // })
    
    // newTodo.save().then((doc) => {
    //     console.log('Saved Doc',doc)
    // }, (e) => {
    //     console.log(e)
    // })

module.exports = {
    Todo
}