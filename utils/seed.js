const{User} = require('../models');
const userData = require('./userData');
const connection = require('../config/connection');


connection.once('open', async () => {

await User.deleteMany({});
await User.create(userData);
console.log('Users seeded!'); 

process.exit(0);

});
