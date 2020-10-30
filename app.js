const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about.html', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname });
});

app.get('/contact.html', (req, res) => {
    res.sendFile('./views/contact.html', { root: __dirname });
});

app.get('/events.html', (req, res) => {
    res.sendFile('/views/events.html', { root: __dirname });
});

app.get('/restrictions.html', (req, res) => {
    res.sendFile('/views/restrictions.html', { root: __dirname });
});

app.get('/signup.html', (req, res) => {
    res.sendFile('/views/signup.html', { root: __dirname });
});

// 404
app.use((req, res) => {
    res.sendFile('/views/404.html', { root: __dirname });
});