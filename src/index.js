const express = require('express');
const typeorm = require('typeorm'); 
const Student = require('./models/Student'); 

const app = express()

const dataSource = new typeorm.DataSource({
  type:"sqlite",
  database:"./db_bagz.sqlite", 
  synchronize: true, 
  entities: [Student],
})

app.get('/', (req, res) => {
  res.send('Youhou');
});

const PORT = 4000; 

const start = async () => {
  await dataSource.initialize(); 
  await dataSource.getRepository(Student).clear();
  dataSource.getRepository(Student).save({ name: 'First Student' });
  app.listen(PORT, () => console.log(`Server started on ${4000} 😎`));
}; 

start(); 