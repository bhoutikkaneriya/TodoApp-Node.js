const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://bhoutik:aeroplane1234@ds223542.mlab.com:23542/todoapp')

module.exports = {
    mongoose
}