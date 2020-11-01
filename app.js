const express = require('express');
const User = require('./models/User');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// log requests to console
app.use((req, res, next) => {
    console.log('new request:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

// static files
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: true}));

// GET routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/index.html', (req, res) => {
    res.render('index');
});

app.get('/about.html', (req, res) => {
    res.render('about');
});

app.get('/contact.html', (req, res) => {
    res.render('contact');
});

app.get('/events.html', (req, res) => {
    res.render('events');
});

app.get('/login.html', (req, res) => {
    res.render('index');
});

app.get('/restrictions.html', (req, res) => {
    res.render('restrictions');
});

app.get('/signup.html', (req, res) => {
    res.render('signup');
});

// POST routes
app.post('/User', (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save().then((result) => {
        res.redirect('restrictions');
    })
})

// 404
app.use((req, res) => {
    res.status(404).render('404');
});