const { getStudentRepository, getHumanRepository } = require("../../database/utils");
const { getSchoolByName } = require('../School/manager')

async function initializeStudents() {
    const studentRepository = await getStudentRepository(); 
    await studentRepository.clear();
    const lyonSchool = await getSchoolByName('Lyon'); 
    await studentRepository.save({ firstName: 'First', lastName: 'Student', school: lyonSchool, });
    await studentRepository.save({ firstName: 'Second', lastName: 'Student', school: lyonSchool, });
}

async function getStudents() {
    const studentRepository = await getStudentRepository();  
    return studentRepository.find();
}

// async function getStudentById() {
//     const studentRepository = await getStudentRepository();  
//     return studentRepository.findOneBy();
// }

async function createStudent(firstName, lastName) {
    const studentRepository = await getStudentRepository(); 
    const newStudent = studentRepository.create({ firstName, lastName });
    await studentRepository.save(newStudent); 
    return newStudent;
}

async function updateStudent(id, firstName, lastName) {
    const studentRepository = await getStudentRepository();
    const student = await studentRepository.findOneBy({ id });
    if (!student) {
        throw Error('No existing Student matching ID.'); 
    } 
    return studentRepository.save({
        id, 
        firstName, 
        lastName,
    });
}

async function deleteStudent(id) {
    const studentRepository = await getStudentRepository(); 
    const student = await studentRepository.findOneBy({ id });
    if (!student) {
        throw Error('No existing Student matching ID.'); 
    } 
    return studentRepository.delete(student);
}

const addHumanToStudent = async (studentId, humanId) => {
    const studentRepository = await getStudentRepository(); 
    const humanRepository = await getHumanRepository(); 
    const student = await studentRepository.findOneBy({ id: studentId }); 
    if (!student) {
        throw Error('No existing Student matching ID.');
    }
    const human = await humanRepository.findOneBy({ id: humanId }); 
    if (!human) {
        throw Error('No existing Human matching ID.');
    }
    student.humans = [...student.humans, human]; 
    return studentRepository.save(student); 
}

module.exports = {
    initializeStudents, 
    getStudents,
    createStudent,
    updateStudent, 
    deleteStudent,
    addHumanToStudent, 
}