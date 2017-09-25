const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks');
const router = require('./routers');
const models = require('./models');
const chalk = require('chalk');

const blue = function(text) {
  console.log(chalk.blue(text))
}

app.use(express.static('views'))
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

const env = nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

models.db.sync({}).then(() => app.listen(3000, () => blue('Server running')))
                  .catch(console.error);
