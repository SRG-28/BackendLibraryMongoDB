const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  author: { type: String, required: true },
  nationality: { type: String, required: true },
  birth_year: { type: Number, required: true },
  fields: { type: String },
  books: [
    {
      book_id: { type: Number, required: true },
      title: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Author', authorSchema);
