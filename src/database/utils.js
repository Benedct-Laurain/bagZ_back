const typeorm = require('typeorm');
const Student = require('../models/Student');
const School = require('../models/School');
const Human = require('../models/Human');

const dataSource = new typeorm.DataSource({
  type: "sqlite",
  database: "./db_bagz.sqlite",
  synchronize: true,
  entities: [Student, School, Human],
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

async function getSchoolRepository() {
  return (await getDatabase()).getRepository(School);
}

const getHumanRepository = async () =>
  (await getDatabase()).getRepository(Human);

module.exports = {
  getDatabase,
  getStudentRepository,
  getSchoolRepository, 
  getHumanRepository,
};
