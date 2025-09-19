const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/UserDB')
  .then(() => console.log('✅ MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Failed:', err));

//Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now }
});

// To use our schema definition, we need to convert our userSchema into a Model we can work with.
// Models are responsible for creating and reading documents from the underlying MongoDB database.
// An instance of a model is called a document.
// When you call mongoose.model() on a schema, Mongoose compiles a model for you.
//  An instance of a model is called a document.
const User = mongoose.model('User', userSchema);

module.exports = User;
