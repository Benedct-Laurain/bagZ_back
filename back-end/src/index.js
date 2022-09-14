const express = require('express');
const studentsControllers = require('./controllers/students');
const { getDatabase } = require("./database/utils");
const { initializeStudents } = require('./models/Student/manager');
const { initializeSchools } = require('./models/School/manager');
const { initializeHumans } = require('./models/Human/manager');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Youhou');
});

const STUDENTS_PATH = '/api/students'; 
app.get(STUDENTS_PATH, studentsControllers.get); 
app.post(STUDENTS_PATH, studentsControllers.post); 
app.put(`${STUDENTS_PATH}/:id`, studentsControllers.put); 
app.delete(`${STUDENTS_PATH}/:id`, studentsControllers.del); 
app.post(`${STUDENTS_PATH}/:id/humans`, studentsControllers.addHuman);

const PORT = 4000; 

const start = async () => {
  await initializeHumans();
  await initializeSchools();
  await initializeStudents();
  await getDatabase();
  app.listen(PORT, () => console.log(`Server started on ${4000} 😎`));
}; 

start(); 