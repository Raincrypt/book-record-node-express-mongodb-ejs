const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.port || 5000;
const uri =
  "mongodb+srv://bookstore:bookstore@cluster0.jw8abud.mongodb.net/?retryWrites=true&w=majority";

// Contect DB
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to DB`))
  .catch((err) => console.log(err));

// Setting the view
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/bookRoute"));

// Setup the server
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
