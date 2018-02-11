var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
/*var cookieParser = require('cookie-parser');*/

var app = express();

const PORT = process.env.PORT || 3000;
const URI = 'mongodb://mpasek:Shortstop5@cluster0-shard-00-00-utw0a.mongodb.net:27017,' +
    'cluster0-shard-00-01-utw0a.mongodb.net:27017,' +
    'cluster0-shard-00-02-utw0a.mongodb.net:27017' +
    '/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
const authRouter = require('./src/routes/authRoutes');
const dbRouter = require('./src/routes/dbRoutes');


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

app.use(express.static(__dirname + 'public'));
/*app.use(express.static(__dirname + '/public'))
    .use(cookieParser());*/
//app.use(express.static('src/views'));
app.use(express.static('src'));

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded());
app.use('/', authRouter);
app.use('/api', dbRouter);

app.get('/', (req, res) => {
    res.send('Hello World! Server and database running correctly');
});

app.listen(PORT, () => {
    console.log('Running server on port ' + PORT);
});
