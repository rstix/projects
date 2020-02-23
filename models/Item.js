const mongoose = require('mongoose');

// bringing Schema from mongooose
const Schema = mongoose.Schema;

// schema that will be saved in the db
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
