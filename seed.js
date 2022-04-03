'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Book = require('./book');

const seed = async () => {
    console.log('hello');
    await Book.create({
        tile: '1776',
        author: 'David McCullough',
        description: '1776 is a book written by David McCullough, published by Simon & Schuster on May 24, 2005. The work is a companion to McCullough\'s earlier biography of John Adams, and focuses on the events surrounding the start of the American Revolutionary War.',
        url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942259/book3_wdcqd0.jpg'
    })

  await Book.create({
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    description: 'Think and Grow Rich is a book written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie.',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942258/book11_zysffw.jpg'
  });
  console.log('saved think and grow rich!');

  await Book.create({
    title: '50 Shades of Grey',
    author: 'E.L. James',
    description: 'When college senior Anastasia Steele (Dakota Johnson) steps in for her sick roommate to interview prominent businessman Christian Grey (Jamie Dornan) for their campus paper, little does she realize the path her life will take. Christian, as enigmatic as he is rich and powerful, finds himself strange… ',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942258/book6_xwb2zd.jpg'
  });
  console.log('saved 50 shades of grey');

  await Book.create({
    title: 'Devil In The White City',
    author: 'Erik Larson',
    description: 'The Devil in the White City: Murder, Magic, and Madness at the Fair That Changed America is a 2003 historical non-fiction book by Erik Larson presented in a novelistic style. ',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942261/book10_whhajm.jpg'
  });
  console.log('saved 50 shades of grey');

  await Book.create({
    title: 'Twilight',
    author: 'Stephanie Meyer',
    description: 'Twilight is a series of fantasy romance novels by Stephenie Meyer. It follows the life of Isabella "Bella" Swan, a human teenager who moves to Forks, Washington and finds her life turned upside-down when she falls in love with a vampire named Edward Cullen.',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942262/book7_ky5xur.jpg'
  });
  console.log('saved twilight');

  await Book.create({
    title: 'How to Not Die Alone',
    author: 'Logan Ury',
    description: 'A “must-read” (The Washington Post) funny and practical guide to help you find, build, and keep the relationship of your dreams.Have you ever looked around and wondered, “Why has everyone found love except me?”',
    url: 'https://res.cloudinary.com/dxg5jg10h/image/upload/v1648942260/book9_sl75hg.jpg'
  });
  console.log('saved twilight');

  mongoose.disconnect(); 
};

seed();