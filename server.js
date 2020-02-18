const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const items = require('./routes/api/items')

const app = express()

// BodyParser Middleware
app.use(bodyParser.json())

const db = require('./config/keys').mongoURI

mongoose
    .connect(db)
    .then(()=>{
        console.log('MongoDB connected.')
    })
    .catch(e => console.log(e))

app.use('/api/items',items)

const port = process.env.PORT || 5000

app.listen(port,() => console.log(`Server listening on port ${port}`))