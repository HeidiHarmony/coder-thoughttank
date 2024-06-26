const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    user_id: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true,
    },
    reactions: [reactionSchema],
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  }
);

// virtual to count the number of reactions

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// timestamp formatting

thoughtSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleString('en-US', { timeZone: 'America/New_York'});
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
