const mongoose = require("mongoose");
// Middleware
require("dotenv").config();
const db = process.env.MONGO_URL;

// Connect to MongoDB using the connection string


mongoose.connect(db)
.then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017