const express = require('express');
const app = express();

const bodyparser = require('body-parser');

// app.use(bodyparser.json())

app.get('/', (req, res, next) => {
    console.log('we are on port number 5001 ! ');
    res.json({
        message: "Defualt port running ! "
    })
});
app.get('/home', (req, res) => {
    console.log('Hello world ');
})

module.exports = app;