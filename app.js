const express = require('express');
const User = require('./models/User');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);
console.log('listening on PORT 3000')

// static files
app.use(express.static('public'));

// middleware
app.use(express.urlencoded({ extended: true}));

// GET routes
app.get('/', (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/login.html', (req, res) => {
    res.render('login', { title: 'Login'});
});

app.get('/profile.html', (req, res) => {
    res.render('profile', { title: 'Profile'});
});

app.get('/reports.html', (req, res) => {
    res.render('reports', { title: 'Reports'});
});

app.get('/signup.html', (req, res) => {
    res.render('signup', { title: 'Sign Up'});
});

// POST routes
app.post('/user', (req, res) => {
    console.log(req.body);
    // const user = new User(req.body);
    // user.save().then((result) => {
    //     res.redirect('profile');
    // });
});

app.post('/restriction', (req, res) => {
    console.log(req.body);
    // const user = new Restriction(req.body);
    // user.save().then((result) => {
    //     res.redirect('reports');
    // });
});

// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});