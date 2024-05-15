const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },

    reactions: {
// Array of nested documents created with the reactionSchema
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const thought = model('thought', thoughtSchema);

module.exports = thought;
