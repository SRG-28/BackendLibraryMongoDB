const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12345@library.1hxit.mongodb.net/library?retryWrites=true&w=majority&appName=library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error conectando a MongoDB:', error));

module.exports = mongoose;

