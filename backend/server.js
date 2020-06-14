const express = require('express');
const cors    = require('cors');
const path     = require('path');
const mongoose = require('mongoose');
const passport = require("passport");



require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection established");
})

app.use(express.static(path.join(__dirname, '../build')))


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);




app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
