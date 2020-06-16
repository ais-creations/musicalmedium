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
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB connection established");
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
    })
}

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const usersRouter = require('./routes/users');
const learnPostsRouter = require('./routes/learnPost');
const chatMessageRouter = require('./routes/chatMessage');
app.use('/users', usersRouter);
app.use('/learnPosts', learnPostsRouter);
app.use('/chat', chatMessageRouter);


app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
//
// let PythonShell = require('python-shell');
//
// // Python function is executed whenever url is of the form localhost:3000/name
// app.get('/search', callGetAPIResults);
//
// function callGetAPIResults(req, res) {
//   let options = {
//     args:
//       [
//         req.query.re, // starting funds
//         req.query.size, // (initial) wager size
//       ]
//   }
//
//   PythonShell.run('./search.py', options, function (err, data) {
//     if (err) res.send(err);
//     res.send(data.toString())
//   });
// }
