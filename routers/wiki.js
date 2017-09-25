const express = require('express');
const wikiRouter = express.Router();

wikiRouter.get('/', function (req, res) {
  res.redirect('/');
});

wikiRouter.post('/', function (req, res) {
  //submit a new page to db
  res.json(req.body);
});

wikiRouter.get('/add', function (req, res) {
  // res.send('got to ADD /wiki/');

  res.render('addpage');
});

wikiRouter.get('/:urlTitle', function (req, res) {
  const urlTitle = req.params.urlTitle;
});

module.exports = wikiRouter;
