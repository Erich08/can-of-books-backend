'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Book = require('./book.js');
const mongoose = require('mongoose');

const app = express();
app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const PORT = process.env.PORT || 3002;

app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('/books', async (request, response) => {
  const books = await Book.find({});

  response.send(books);
});

app.delete('/books/:id', async (request, response) => {
  try {
    await Book.findByIdAndDelete(request.params.id);
    response.status(204).send('Book was successfully deleted.');
  } catch (error) {
    console.error(error);
  }
});

app.use(express.json());

app.post('/books', async (request, response) => {
  try {
    const newBook = await Book.create(request.body);
    response.status(204).send('Book was successfully created.');
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
