const Schema = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Use a getter method to format the timestamp on query
    },
  },
  // {
  //   toJSON: {
  //     getters: true,
  //   },
  //   id: false,
  // }
);

// timestamp formatting

reactionSchema.virtual('formattedCreatedAt').get(function() {
  return this.createdAt.toLocaleString('en-US', { timeZone: 'America/New_York'});
});


module.exports = reactionSchema;
