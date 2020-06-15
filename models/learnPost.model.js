const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LearnPostSchema = new Schema({
  userID: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  keywords: {
    type: Array,
    required: true
  },
  currencySymbol: {
    type: String
  },
  minBudget: {
    type: Number,
  },
  maxBudget: {
    type: Number,
  },
  timeFrame: {
    type: String,
  }
}, {
  timestamps: true,
});

const LearnPost = mongoose.model('LearnPost', LearnPostSchema);
module.exports = LearnPost;