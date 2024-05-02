// ADAPT! ADAPT! ADAPT!

const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionContent: {
      type: String,
      required: true,
      maxlength: 100,
      minlength: 2,
      default: 'Unnamed reaction',
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
