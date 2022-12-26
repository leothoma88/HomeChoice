const db = require('../config/connection');
const { Home } = require('../models');

const homeData = require('./homeData.json');


db.once('open', async () => {
  // clean database
  await Home.deleteMany({});
  await Home.create(homeData);
 

  // bulk create each model
//   const homes = await Home.insertMany(homeData);


//   for (newClass of classes) {
//     // randomly add each class to a school
//     const tempSchool = schools[Math.floor(Math.random() * schools.length)];
//     tempSchool.classes.push(newClass._id);
//     await tempSchool.save();

//     // randomly add a professor to each class
//     const tempProfessor = professors[Math.floor(Math.random() * professors.length)];
//     newClass.professor = tempProfessor._id;
//     await newClass.save();

//     // reference class on professor model, too
//     tempProfessor.classes.push(newClass._id);
//     await tempProfessor.save();
//   }

  console.log('all done!');
  process.exit(0);
});