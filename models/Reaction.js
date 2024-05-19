const {Schema,Types} = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    user_id: {
      type: Schema.Types.ObjectId, 
      ref: 'User',
      required: true,
    },
    thought_id: {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
    },
  },
);

// timestamp formatting

reactionSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleString('en-US', { timeZone: 'America/New_York'});
});


module.exports = reactionSchema;
