const express = require('express');
const cors = require('./headerCORS');
const mongoose = require('./mongoDB');
const Author = require('./models/author');
const Publisher = require('./models/publisher');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors);

//authors
app.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo autores: ' + err.message });
  }
});

app.get('/authors/:id', async (req, res) => {
    try {
      const author = await Author.findOne({ id: req.params.id });
      if (!author) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
      res.json(author);
    } catch (err) {
      res.status(500).json({ message: 'Error obteniendo el autor: ' + err.message });
    }
  });

app.post('/authors', async (req, res) => {
  const { id, author, nationality, birth_year, fields, books } = req.body;
  const newAuthor = new Author({ id, author, nationality, birth_year, fields, books });

  try {
    const savedAuthor = await newAuthor.save();
    res.status(201).json(savedAuthor);
  } catch (err) {
    res.status(400).json({ message: 'Error creando autor: ' + err.message });
  }
});

app.put('/authors/:id', async (req, res) => {
    try {
      const updatedAuthor = await Author.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedAuthor) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
      res.json(updatedAuthor);
    } catch (err) {
      res.status(400).json({ message: 'Error al actualizar autor: ' + err.message });
    }
  });

app.delete('/authors/:id', async (req, res) => {
    try {
      const deletedAuthor = await Author.findOneAndDelete({ id: req.params.id });
      if (!deletedAuthor) {
        return res.status(404).json({ message: 'Autor no encontrado' });
      }
      res.json({ message: 'Autor eliminado', author: deletedAuthor });
    } catch (err) {
      res.status(500).json({ message: 'Error al eliminar autor: ' + err.message });
    }
  });

//publishers
app.get('/publishers', async (req, res) => {
  try {
    const publishers = await Publisher.find();
    res.json(publishers);
  } catch (err) {
    res.status(500).json({ message: 'Error obteniendo editores: ' + err.message });
  }
});

app.get('/publishers/:id', async (req, res) => {
    try {
      const publisher = await Publisher.findOne({ id: req.params.id });
      if (!publisher) {
        return res.status(404).json({ message: 'Editor no encontrado' });
      }
      res.json(publisher);
    } catch (err) {
      res.status(500).json({ message: 'Error obteniendo el editor: ' + err.message });
    }
  });

app.post('/publishers', async (req, res) => {
  const { id, publisher, country, founded, genre, books } = req.body;
  const newPublisher = new Publisher({ id, publisher, country, founded, genre, books });

  try {
    const savedPublisher = await newPublisher.save();
    res.status(201).json(savedPublisher);
  } catch (err) {
    res.status(400).json({ message: 'Error creando editor: ' + err.message });
  }
});

app.put('/publishers/:id', async (req, res) => {
    try {
      const updatedPublisher = await Publisher.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true, runValidators: true }
      );
      if (!updatedPublisher) {
        return res.status(404).json({ message: 'Editor no encontrado' });
      }
      res.json(updatedPublisher);
    } catch (err) {
      res.status(400).json({ message: 'Error al actualizar editor: ' + err.message });
    }
  });

  app.delete('/publishers/:id', async (req, res) => {
    try {
      const deletedPublisher = await Publisher.findOneAndDelete({ id: req.params.id });
      if (!deletedPublisher) {
        return res.status(404).json({ message: 'Editor no encontrado' });
      }
      res.json({ message: 'Editor eliminado', publisher: deletedPublisher });
    } catch (err) {
      res.status(500).json({ message: 'Error al eliminar editor: ' + err.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
