'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  url: String,
  isFavorite: Boolean,
  rating: String,
  publishDate: String,
  dateAdded: String,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
