const typeorm = require('typeorm');
const Student = require('../models/Student');

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./db_bagz.sqlite",
  synchronize: true,
  entities: [Student],
  logging: ["query", "error"],
});

let initialized = false; 
async function getDatabase() {
  if (!initialized) {
    await dataSource.initialize(); 
    initialized = true; 
    console.log('Successfully connected to database'); 
  }
  return dataSource;
}

async function getStudentRepository() {
  return (await getDatabase()).getRepository(Student);
}

module.exports = {
  getDatabase,
  getStudentRepository,
}
