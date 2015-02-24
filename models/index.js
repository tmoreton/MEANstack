var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/simplefinance');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var User;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

User = mongoose.model('User', userSchema);

module.exports = {User: User};
