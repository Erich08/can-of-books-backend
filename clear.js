'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./book');

async function clear() {
  try {
    await Book.deleteMany({});
    console.log('Cats deleted!');
  } catch(error) {
    console.error('something went terribly wrong when deleting: ', error);
  } finally {
    mongoose.disconnect(); 
  }
}

clear();