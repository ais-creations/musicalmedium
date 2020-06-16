const router = require('express').Router();
let User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bcrypt = require('bcrypt')
const keys = require("../config/keys");

const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

router.post("/register", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        jobTitle: req.body.jobTitle,
        description: req.body.description,
        yearsOfExperience: req.body.yearsOfExperience,
        educationLevel: req.body.educationLevel,
        rating: req.body.rating,
        imgSrc: req.body.imgSrc,
        keywords: req.body.keywords
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        if (err) throw err
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});
// router.get('/login', (req, res) => {
//     return (
//         res.status(400).json({"hi": "indip"})
//     )
// });

router.post("/login", (req, res) => {
  // Form validation

  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Please enter a registered email" });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          // firstname: user.firstname
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              userId: user.id
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.get('/', (req, res) => {
  User.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.put("/", (req, res) => {
  fs.readFile('db.json', 'utf8', function (err, data) {
    if (err) throw err;
    let dbData = JSON.parse(data);
    // Update data here.
    // You will have to figure out how to do it yourself
    // After you have update the entry, write the entire array back to the json file.
    updatedJSONData = JSON.stringify(dbData)
    fs.writeFile('db.json', json, 'utf8', function (err, data) {
      if (err) throw err;
      // Do something here
      res.status(200).send("Basket was updated");

    });

  });
})


module.exports = router;