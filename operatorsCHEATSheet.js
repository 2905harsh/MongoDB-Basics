// ====================================================
// MongoDB Operators - Complete Cheat Sheet
// Assume: const User = mongoose.model("User", userSchema);
// ====================================================

/* ==============================
   FIND OPERATORS
============================== */

// 1. Greater Than ($gt)
await User.find({ age: { $gt: 30 } });
// Find users with age > 30
// Example: Senior employees above 30

// 2. Greater Than or Equal ($gte)
await User.find({ age: { $gte: 18 } });
// Find users with age >= 18
// Example: Adults eligible to register

// 3. Less Than ($lt)
await User.find({ age: { $lt: 40 } });
// Find users with age < 40
// Example: Young professionals under 40

// 4. Less Than or Equal ($lte)
await User.find({ age: { $lte: 25 } });
// Find users with age <= 25
// Example: Students under 25 discount

// 5. Equal ($eq)
await User.find({ role: { $eq: "admin" } });
// role === "admin"
// Example: Find admin accounts

// 6. Not Equal ($ne)
await User.find({ status: { $ne: "inactive" } });
// status !== "inactive"
// Example: Active users only

// 7. In ($in)
await User.find({ name: { $in: ["Alice", "Bob"] } });
// name is Alice or Bob
// Example: Search specific users

// 8. Not In ($nin)
await User.find({ city: { $nin: ["Delhi", "Mumbai"] } });
// city is NOT Delhi/Mumbai
// Example: Exclude certain cities

// 9. And ($and)
await User.find({
  $and: [{ age: { $gte: 18 } }, { age: { $lte: 30 } }]
});
// age between 18–30
// Example: Young adults filter

// 10. Or ($or)
await User.find({
  $or: [{ role: "admin" }, { role: "manager" }]
});
// role is admin OR manager
// Example: Staff with privileges

// 11. Not ($not)
await User.find({ age: { $not: { $gt: 60 } } });
// NOT (age > 60) => age <= 60
// Example: Exclude seniors

// 12. Exists ($exists)
await User.find({ email: { $exists: true } });
// Only users with email field
// Example: Valid accounts only

// 13. Regex ($regex)
await User.find({ name: { $regex: /^A/ } });
// Names starting with A
// Example: Search by pattern

// 14. ElemMatch ($elemMatch)
await User.find({
  scores: { $elemMatch: { $gt: 80, $lt: 90 } }
});
// At least one score between 80–90
// Example: Filter students in score range


/* ==============================
   UPDATE OPERATORS
============================== */

// 1. Set ($set)
await User.updateOne({ name: "Alice" }, { $set: { age: 28 } });
// Set age = 28 for Alice
// Example: Update profile info

// 2. Increment ($inc)
await User.updateOne({ name: "Bob" }, { $inc: { points: 10 } });
// Increase Bob's points by 10
// Example: Reward system

// 3. Decrement (using $inc negative)
await User.updateOne({ name: "Bob" }, { $inc: { points: -5 } });
// Decrease Bob's points by 5
// Example: Deduct penalty

// 4. Unset ($unset)
await User.updateOne({ name: "Alice" }, { $unset: { nickname: "" } });
// Remove the nickname field
// Example: Delete optional field

// 5. Push ($push)
await User.updateOne({ name: "Alice" }, { $push: { hobbies: "reading" } });
// Add "reading" to hobbies array
// Example: Add a new hobby

// 6. Pull ($pull)
await User.updateOne({ name: "Alice" }, { $pull: { hobbies: "reading" } });
// Remove "reading" from hobbies array
// Example: Remove hobby

// 7. AddToSet ($addToSet)
await User.updateOne({ name: "Alice" }, { $addToSet: { hobbies: "music" } });
// Add "music" if not already present
// Example: Avoid duplicate hobbies

// 8. Rename ($rename)
await User.updateOne({}, { $rename: { "oldField": "newField" } });
// Rename oldField -> newField
// Example: Refactor schema

// 9. Multiply ($mul)
await User.updateOne({ name: "Alice" }, { $mul: { salary: 1.1 } });
// Multiply salary by 1.1 (10% raise)
// Example: Salary hike

// 10. Min ($min)
await User.updateOne({ name: "Alice" }, { $min: { age: 20 } });
// Set age to 20 only if current age > 20
// Example: Prevent lowering age below 20

// 11. Max ($max)
await User.updateOne({ name: "Alice" }, { $max: { age: 30 } });
// Set age to 30 only if current age < 30
// Example: Update only if new value is bigger

// 12. Current Date ($currentDate)
await User.updateOne({ name: "Alice" }, { $currentDate: { lastLogin: true } });
// Update lastLogin with current date/time
// Example: Track user activity
