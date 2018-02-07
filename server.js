var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const PORT = 3000;
const URI = 'mongodb://mpasek:Shortstop5@cluster0-shard-00-00-utw0a.mongodb.net:27017,' +
            'cluster0-shard-00-01-utw0a.mongodb.net:27017,' +
            'cluster0-shard-00-02-utw0a.mongodb.net:27017' +
            '/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';


// Connect to mongodb
mongoose.connect(URI);

// On connection
mongoose.connection.on('connected', () => {
    console.log('MongoDb connected on port 27017');
});

// On connection error
mongoose.connection.on('error', (err) => {
    console.log(err);
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World! Server and database running correctly.');
});

app.listen(PORT, () => {
    console.log('Running server on port ' + PORT);
});