const User = require('../models/User');
const userData = require('./userData.json');

async function seedUsers() {
  try {
    await User.create(userData);
    console.log('Users seeded successfully!');

  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

module.exports = seedUsers;
