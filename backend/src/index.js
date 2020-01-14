const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
const port = 3000;

mongoose.connect('mongodb+srv://diego:diego@cluster0-rzwpz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

app.use(express.json());
app.use(routes);

app.listen(port);