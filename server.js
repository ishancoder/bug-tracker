let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let morgan = require('morgan');
// just for development will be of no use
let cors = require('cors');

mongoose.connect('mongodb://localhost:27017/bugtracker', (err, db)=>{
    if(!err) {
        console.log("Connected to /bugtracker");
    } else {
        console.dir(err);
    }
});

require('./app/models/Bugs');
require('./app/models/Repos');
let routes = require('./app/routes/routes.js')

let app = express();

let jsonParser = bodyParser.json();
let urlencodedParser = bodyParser.urlencoded({extended: false});

app.use(cors({origin: 'http://localhost:3001'}))
app.use(morgan());
app.use(jsonParser);
app.use(urlencodedParser);
app.use('/', routes);

app.listen(3000, ()=>{
    console.log("Listening on port 3000....");
});