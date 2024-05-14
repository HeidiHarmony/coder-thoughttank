// ADAPT! ADAPT! ADAPT!

const { thought, Student } = require('../models');

module.exports = {
  // Get all thoughts
  async getthoughts(req, res) {
    try {
      const thoughts = await thought.find().populate('students');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a thought
  async getSinglethought(req, res) {
    try {
      const thought = await thought.findOne({ _id: req.params.thoughtId })
        .populate('students');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createthought(req, res) {
    try {
      const thought = await thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deletethought(req, res) {
    try {
      const thought = await thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await Student.deleteMany({ _id: { $in: thought.students } });
      res.json({ message: 'thought and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updatethought(req, res) {
    try {
      const thought = await thought.findOneAndUpdate(
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
};
