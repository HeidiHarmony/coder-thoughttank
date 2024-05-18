const { Schema, model } = require('mongoose');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    trimmed: true,
    maxlength: 50,
  },
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
  thoughts: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'Thought'
  }],
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  toJSON: {
    getters: true,
  },
});

const User = model('User', userSchema);

module.exports = User;
