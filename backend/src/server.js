const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

// Inicializaciones
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Variables Globales


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/products.routes'));

// Archivos staticos
app.use(express.static(path.join( __dirname, 'public')))

module.exports = app;