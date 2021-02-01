const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoDB connection

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully!")
})

// end of mongoDB connection code

const notesRouter = require('./routes/notes');
const labelsRouter = require('./routes/labels');

app.use('/notes', notesRouter);
app.use('/labels', labelsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});