const mongoose = require('mongoose');
const User = require('./UserModel');
// Insert users - 2 ways to insert documents in MongoDB using Mongoose - Model.create() and new Model() + document.save()
async function insertUsers() {
  try {
    //this newuser1 will hold the id of the inserted document by mongoose. We can use it later if needed with User.findById(newuser1._id)
    const newuser1 = await User.create({
      name: 'John Doe',
      email: 'john@gmail.com',
      age: 30,
      isActive: true,
      tags: ['admin', 'editor']
    });
   
    const newuser2 = new User({
      name: 'Jane Smith',
      email: 'jane@gmail.com',
      age: 25,
      isActive: false,
      tags: ['user']
    });
    await newuser2.save();

    const newuser3 = await User.create({
      name: 'Alice Johnson',
      email: 'alice@gmail.com',
      age: 28,
      isActive: false,
      tags: ['user', 'contributor']
    });

    const newuser4 = new User({
      name: 'Bob Brown',
      email: 'bob@yahoo.com',
      age: 35,
      isActive: true,
      tags: ['admin']
    });
    await newuser4.save();

    const newuser5 = await User.create({
      name: 'Charlie Davis',
      email: 'davis@gmail.com',   // fixed typo
      age: 22,
      isActive: true,
      tags: ['user']
    });

    console.log('✅ All users inserted successfully');
  } catch (err) {
    console.error('❌ Error inserting users:', err);
  } finally {
    mongoose.connection.close(); // close connection after insert
  }
}

insertUsers();

