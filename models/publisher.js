const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  publisher: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: Number, required: true },
  genere: { type: String },
  books: [
    {
      book_id: { type: Number, required: true },
      title: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Publisher', publisherSchema);
