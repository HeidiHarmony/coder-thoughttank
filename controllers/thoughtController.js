const Thought = require('../models/Thought');
const User = require('../models/User');
const Reaction = require('../models/Reaction');

module.exports = {

  // Get all thoughts
  async getThoughts(_req, res) {
    try {
      const thoughts = await Thought.find().populate('user_id');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a thought
  async createThought(req, res) {
    try {
      const newThought = await Thought.create(req.body);
      // Find the user by ID and update their thoughts array
      const user = await User.findOneAndUpdate(
        { _id: req.body.user_id },
        { $push: { thoughts: newThought._id } },
        { new: true }
      );
  
      // Check if user exists
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Send a response with the created thought and the user
      res.json({
        message: 'The user ' + user.userName + ' has a new thought: ' + newThought.thoughtText + '.',
        thought: newThought,
        user: user
      });
    } catch (err) {
      console.error(err);
      // Log the error and return a 500 status with the error message
      return res.status(500).json({ message: 'Failed to create thought', error: err.message });
    }
  },
  
// Get a single thought
async getSingleThought(req, res) {
  try {
    const thought = await Thought.findById(req.params.thoughtId).populate('user_id reactions');

    if (!thought) {
      return res.status(404).json({ message: 'That thought is invalid. ID not found.' });
    }

    res.json(thought);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
},

  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

// Delete a thought
async deleteThought(req, res) {
  try {
    const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

    if (!thought) {
      return res.status(404).json({ message: 'No thought with this ID exists.' });
    } else {
      console.log("Is this the thought you were looking for? " + thought.thoughtText);
    }

    await User.findOneAndUpdate(
      { _id: thought.user_id },
      { $pull: { thoughts: thought._id } }
    );

    res.json({ message: 'That thought has been forgotten.'});
  } catch (err) {
    res.status(500).json(err);
  }
},

// Add a reaction
async addReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    console.log(thought, thought.reactions.length);

    if (!thought) {
      res.status(404).json(err);
    }

    res.json({
      thought,
      total: thought.reactions.length
    });


  } catch (err) {
    res.status(500).json(err);
  }
},

// Delete a reaction
async deleteReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );

    if (!thought) {
      res.status(404).json({ message: 'No thought with that ID' });
    };

    res.json(thought);

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }}
};