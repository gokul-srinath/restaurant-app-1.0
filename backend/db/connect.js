const { default: mongoose } = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/restaurant", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log("Database connected to DB restaurant");
    })
    .catch((err) => {
      console.log("error while connecting to database", err);
    });
};

module.exports = {
  connect,
};
