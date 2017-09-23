const express = require('express');
const wikiRouter = express.Router();


module.exports = function () {
  wikiRouter.get('/:urlTitle', function (req, res) {
    const urlTitle = req.params.urlTitle;
  });

  wikiRouter.get('/', function (req, res) {
    //retrieve all wiki pages
    res.send('got to GET /wiki/');
  });

  wikiRouter.post('/', function (req, res) {
    //submit a new page to db
    res.send('got to POST /wiki/');
  });

  wikiRouter.get('/add', function (req, res) {
    //retrieve the add a page form
    res.send('got to GET /wiki/add');
  });
};
