const Schema = mongoose.Schema;

const LearnPostScheme = new Schema({
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

const User = mongoose.model('User', UserSchema);
module.exports = User;