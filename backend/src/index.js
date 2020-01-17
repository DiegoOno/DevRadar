const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);
const port = 3333;

setupWebsocket(server);

mongoose.connect('mongodb+srv://diego:diego@cluster0-rzwpz.mongodb.net/test?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port);