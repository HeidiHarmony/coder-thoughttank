const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');

// Schema to create user model
const userSchema = new Schema(
{
    userName: {
      type: String,
      unique: true,
      required: true,
      trimmed: true,
      max_length: 50,
    }
  },
  {
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: function (value) {
          return emailRegex.test(value);
        },
        message: (props) => `${props.value} has a typo or is not a valid email address.`,
      },
    },
  },
    {
    thoughts: [{ 
      type: mongoose.Schema.Types._id, 
      ref: 'Thought'
    }]
  },
  {
    friends: [{
      type: mongoose.Schema.Types._id,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const user = model('User', userSchema);

module.exports = User;
