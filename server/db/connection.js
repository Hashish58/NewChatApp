const mongoose = require("mongoose");

const url = `mongodb+srv://mahamadhashish241:MongoDB123@cluster0.pkc2xh9.mongodb.net/?retryWrites=true&w=majority`

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log("Error", e));
