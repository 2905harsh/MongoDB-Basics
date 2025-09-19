const mongoose = require('mongoose');
const User = require('./UserModel');

async function runQueries() {
  try{
      // Find all In-active users
      const inactiveUsers = await User.find({isActive:false});
      console.log('Inactive Users:', inactiveUsers);

       // Find One - Gives the first matching document
      const oneUser = await User.findOne({age:{$gt:30}});
      console.log('One User with age > 30:', oneUser); 

      // some selected fields - name and email only
      const selectedFields = await User.find().select('name email'); // name email id will be shown
      console.log('Selected Fields (name, email):', selectedFields);  

      const selectedFieldsExclusion = await User.find().select('-tags -createdAt'); // exclude tags and createdAt fields
      console.log('Selected Fields Exclusion (excluding tags, createdAt):', selectedFieldsExclusion);

      // Limited results - limit to 2 documents used in pagination
      const limitedResults = await User.find().limit(2);
      console.log('Limited Results Showing(2 documents):', limitedResults);

      // Skip results - skip first 2 documents used in pagination
      const skippedResults = await User.find().limit(2).skip(2);
      console.log('Skipped Results Showing 2 results only but(skipping first 2 documents):', skippedResults);

      // Sort results - sort by age in ascending order
      const sortedResultsAsc = await User.find().sort({age:1});
      console.log('Sorted Results by age (Ascending):', sortedResultsAsc);

      // Sort results - sort by age in descending order
      const sortedResultsDesc = await User.find().sort({age:-1});
      console.log('Sorted Results by age (Descending):', sortedResultsDesc);

      // Count documents - count number of users with age > 25 and isActive true
      const countUsers = await User.countDocuments({isActive:true , age:{$gt:25}});
      console.log('Count of users with isActive true AND age > 25:', countUsers);

      // deleteOne - delete one user with name 'John Doe'
      const deleteResult = await User.deleteOne({name:'John Doe'});
      console.log('Delete Result for user with name John Doe:', deleteResult);

      

      
  }
  catch(err){
    console.error('❌ Error running queries:', err);
  }finally{
    mongoose.connection.close(); // close connection after queries
  }
}

runQueries();
