const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// db configuration, getting uri from key.js file
const db = require('./config/keys').mongoURI;

// connecting to the databse using mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB connected.');
  })
  .catch(e => console.log(e));

app.use('/api/items', items);

// using process.env.PORT heroku will use it
const port = process.env.PORT || 5000;

// express listening on port
app.listen(port, () => console.log(`Server listening on port ${port}`));
