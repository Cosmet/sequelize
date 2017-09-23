const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki');
const userRouter = require('./user');

module.exports = function () {
  router.use('/wiki', wikiRouter);
};
