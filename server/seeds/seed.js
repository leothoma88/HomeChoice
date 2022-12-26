const db = require('../config/connection');
const { Home } = require('../models');

const homeData = require('./homeData.json');


db.once('open', async () => {
  // clean database
  await Home.deleteMany({});
  await Home.create(homeData);

  console.log('all done!');
  process.exit(0);
});