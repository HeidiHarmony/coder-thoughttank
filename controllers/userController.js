const User = require('../models/User');

module.exports = {
  // Get all users
  async getUsers(_req, res) {
    try {
      console.log('Fetching users...');
      const users = await User.find();
      console.log('Users:', users);
      users.forEach(user => {
        console.log('User ID:', user._id);
        console.log('User Name:', user.userName);
        console.log('User Email:', user.email);
        console.log('User Thoughts:', user.thoughts);
        console.log('User Friends:', user.friends);
      });
      res.json({
        users,
        total: users.length,
      });
    } catch (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ message: 'Failed to fetch users' });
    }
  },

  // Get a single user by ID
  async getSingleUser(req, res) {
    try {
      const user = await User.findById(req.params.userId).select('-__v');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error fetching user:', err);
      res.status(500).json({ message: 'Failed to fetch user' });
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      console.error('Error creating user:', err);
      res.status(500).json({ message: 'Failed to create user' });
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ message: 'Failed to update user' });
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const user = await User.findByIdAndDelete(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ message: 'Failed to delete user' });
    }
  },

  // Add a friend to a user
  async addFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $addToSet: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error adding friend:', err);
      res.status(500).json({ message: 'Failed to add friend' });
    }
  },

  // Remove a friend from a user
  async removeFriend(req, res) {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { $pull: { friends: req.params.friendId } },
        { new: true, runValidators: true }
      );
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (err) {
      console.error('Error removing friend:', err);
      res.status(500).json({ message: 'Failed to remove friend' });
    }
  },
};
