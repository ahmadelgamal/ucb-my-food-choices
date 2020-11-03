const express = require('express');
const session = require('express-session');
const TWO_HOURS = 1000 * 60 * 60 * 2;
const app = express();

// set view engine
app.set('view engine', 'ejs');

// use express-session (set defaults)
app.use(session( {
    name: 'sid',
    resave: false,
    saveUninitialized: false,
    secret: 'secret-word',
    cookie: {
        magAge: TWO_HOURS,
        sameSite: true,
        secure: false
    }
}));

// redirect to login
const redirectLogin = (req, res, next) => {
    if (!req.session.userId) {
        res.redirect('login.html');
    } else {
        next();
    }
}

// use express-static
app.use(express.static('public'));

// use express-urlencoded
app.use(express.urlencoded({ extended: true}));

// GET routes
app.get('/', redirectLogin, (req, res) => {
    const { userId } = req.session;
    res.render('profile', { 
        title: 'profile',
        userId: userId
    });
});

app.get('/login.html', (req, res) => {
    const { userId } = req.session
    res.render('login', { 
        title: 'Login',
        userId: userId
    });
});

app.get('/signup.html', (req, res) => {
    const { userId } = req.session
    res.render('signup', { 
        title: 'Signup',
        userId: userId
    });
});

app.get('/profile.html', redirectLogin, (req, res) => {
    const { userId } = req.session;
    res.render('profile', { 
        title: 'Profile',
        userId: userId
    });
});

app.get('/reports.html', redirectLogin, (req, res) => {
    const { userId } = req.session;
    res.render('reports', { 
        title: 'Reports',
        userId: userId
    });
});

app.post('/login', () => {

})

app.post('/register', () => {
    
})

app.post('/logout', () => {
    
})

app.listen(3000, () => {
    console.log(`http://localhost:3000`);
});
















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
// app.post('/users', (req, res) => {
//     console.log(req.body);
//     const user = new User(req.body);
//     user.save().then((result) => {
//         res.redirect('profile');
//     });
// });

// app.post('/restriction', (req, res) => {
//     console.log(req.body);
//     const user = new Restriction(req.body);
//     user.save().then((result) => {
//         res.redirect('reports');
//     });
// });

// // 404
// app.use((req, res) => {
//     res.status(404).render('404', { title: '404'});
// });