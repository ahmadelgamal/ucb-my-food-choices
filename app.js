// const express = require('express');
// const routes = require("./controllers");
// const User = require('./models/User');
// const sequelize = require("./config/connection");
// const path = require("path");
// const PORT = process.env.PORT || 3001;

// // express app
// const app = express();

// // register view engine
// app.set('view engine', 'ejs');

// //session
// const session = require("express-session");
// const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const sess = {
//   secret: "Super secret secret",
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// app.use(express.json());
// // static files
// //app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, "public")));

// // middleware
// app.use(express.urlencoded({ extended: true}));

// listen for requests
// app.listen(3000);
// console.log('listening on PORT 3000')

// turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log("Now listening"));
//   });

// // GET routes
// app.get('/', (req, res) => {
//     res.render('login', { title: 'Login' });
// });

// app.get('/login.html', (req, res) => {
//     res.render('login', { title: 'Login'});
// });

// app.get('/profile.html', (req, res) => {
//     res.render('profile', { title: 'Profile'});
// });

// app.get('/reports.html', (req, res) => {
//     res.render('reports', { title: 'Reports'});
// });

// app.get('/signup.html', (req, res) => {
//     res.render('signup', { title: 'Sign Up'});
// });

// // POST routes
// app.post('/user', (req, res) => {
//     console.log(req.body);
//     // const user = new User(req.body);
//     // user.save().then((result) => {
//     //     res.redirect('profile');
//     // });
// });

// app.post('/Restriction', (req, res) => {
//     console.log(req.body);
//     // const user = new Restriction(req.body);
//     // user.save().then((result) => {
//     //     res.redirect('reports');
//     // });
// });

// // 404
// app.use((req, res) => {
//     res.status(404).render('404', { title: '404'});
// });
