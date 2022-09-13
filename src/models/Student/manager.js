const { getStudentRepository } = require("../../database/utils");

async function initializeStudents() {
    const studentRepository = await getStudentRepository(); 
    await studentRepository.clear();
    await studentRepository.save({ firstName: 'First', lastName: 'Student'});
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

module.exports = {
    initializeStudents, 
    getStudents,
    createStudent,
    updateStudent, 
    deleteStudent,
}