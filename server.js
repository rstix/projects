const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')

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

// Serve static assets if in production
if( process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.httml'))
  })
}

// using process.env.PORT heroku will use it
const port = process.env.PORT || 5000;

// express listening on port
app.listen(port, () => console.log(`Server listening on port ${port}`));
