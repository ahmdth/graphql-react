const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost:27017/books');
mongoose.connection.once('open', () => {
  console.log("Connected to database success.")
})

let root = { hello: () => 'Hello world!' };

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.get("/", (req, res, next) => {
  res.send("hello world");
})

app.listen(3000, () => {
  console.log("App Listen on port 3000")
});