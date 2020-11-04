const express = require('express');
const routes = require("./controllers");
//const User = require('./models/User');
const sequelize = require("./config/connection");
const path = require("path");
const PORT = process.env.PORT || 3001;

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// session
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// redirect login
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        next()
    }
}

// redirect profile
const redirectProfile = (req, res, next) => {
    if (req.session.userId) {
        res.redirect('/profile');
    } else {
        next()
    }
}







// use expresss-session
app.use(session(sess));

// use expresss-json
app.use(express.json());

// use express-static
app.use(express.static(path.join(__dirname, "public")));

// use express-urlencoded
app.use(express.urlencoded({ extended: true}));






// GET routes
app.get('/', redirectProfile, (req, res) => {
    res.render('login', { title: 'Login' });
});

app.get('/login.html', redirectProfile, (req, res) => {
    res.render('login', { title: 'Login'});
});

app.get('/profile.html', redirectLogin, (req, res) => {
    res.render('profile', { title: 'Profile'});
});

app.get('/reports.html', redirectLogin, (req, res) => {
    res.render('reports', { title: 'Reports'});
});

app.get('/signup.html', redirectProfile, (req, res) => {
    res.render('signup', { title: 'Sign Up'});
});







// POST routes
app.post('/login', redirectProfile, (req, res) => {
    const { email, password } = req.body

    if (email && password) {
        const user = users.find (
            user => user.email === email && user.password === password
        )

        if (user) {
            req.session.userId = userId
            return res.redirect('/profile');
        }
    }

    res.redirect('/login');
});







// 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});
