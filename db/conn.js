const mongoose = require("mongoose");
//Mongoose connect
mongoose
  .connect(
    "mongodb+srv://Shreya:aGpS0flLkLtqscKU@cluster0.hih9q.mongodb.net/?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Mongo DB is successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });