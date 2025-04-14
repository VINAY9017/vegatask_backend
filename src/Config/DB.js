const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rajvinay324:RTCrAcOlKqKtRARO@cluster0.idrgu9e.mongodb.net/vegaTask"
  )
  .then(() => {
    console.log("Databse Connected");
  })
  .catch(() => {
    console.log("Database Not Connected");
  });
