const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes.js');


const DB_URL = "mongodb+srv://yililavender:wVdh5ZSRzsyc2Kl8@cluster0.asthkb5.mongodb.net/gbc_full_stack?retryWrites=true&w=majority"
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', noteRoutes);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 3000");
});