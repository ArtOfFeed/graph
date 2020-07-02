const express = require('express');
const graphHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

const uri = "mongodb+srv://vovk:147456@cluster0-hpnca.mongodb.net/db?retryWrites=true&w=majority";

mongoose.connect(
    uri,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const dbConnection = mongoose.connection;

dbConnection.on('error', err => console.log(`Connection has some issues ${err}`));
dbConnection.once('open', () => console.log('Connected to DB'));

app.use(cors());
app.use('/graphql', graphHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, err => {
    err ? console.log(error) : console.log('Server started');
});