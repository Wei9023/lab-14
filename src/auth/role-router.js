'use strict';

const express = require('express');
const roleRouter = express.Router();

const User = require('./users-model.js');
const auth = require('./middleware.js');
const userRole = require('./oauth/google.js');


roleRouter.get('/public-stuff', (req,res,next) => {
    res.status(200).send('Welcome to the public-stuff that everybody can see it');
  })

roleRouter.get('/hidden-stuff', auth(), (req,res,next) => {
    res.status(200).send('Welcome to the hidden-stuff that only can read after log-in');
  })

  roleRouter.get('/something-to-read', auth(), (req,res,next) => {
    res.status(200).send('Welcome to get something to read');
  })

  roleRouter.post('/create-a-thing', auth(), (req,res,next) => {
    res.status(200).send('Welcome to create a thing as an editor');
  })

  roleRouter.put('/update', auth(), (req,res,next) => {
    res.status(200).send('Welcome to update the newest comment');
  })

  roleRouter.patch('/jp', auth(), (req,res,next) => {
    res.status(200).send('Welcome to patch whatever you like');
  })

  roleRouter.delete('/bye-bye', auth(), (req,res,next) => {
    res.status(200).send('Delete the thing you don\'t want it');
  })

  roleRouter.get('/everything', auth(), (req,res,next) => {
    res.status(200).send('Welcome to the hidden-stuff that only can read after log-in');
  })



module.exports = roleRouter;