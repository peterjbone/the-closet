const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const Handlebars = require('handlebars');

// Inicializaciones
const app = express();

// Registrar el helper eq en Handlebars
Handlebars.registerHelper('eq', function(a, b) {
    return a === b;
});

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
app.use(methodOverride('_method'))

// Variables Globales


// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/products.routes'));

// Archivos staticos
app.use(express.static(path.join( __dirname, 'public')))

module.exports = app;