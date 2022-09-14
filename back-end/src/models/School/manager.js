const { getSchoolRepository, getStudentRepository } = require("../../database/utils"); 

async function initializeSchools() {
    const schoolRepository = await getSchoolRepository(); 
    const studentRepository = await getStudentRepository();
    await studentRepository.clear();
    await schoolRepository.clear();
    await schoolRepository.save({ schoolName: 'Lyon' });
    await schoolRepository.save({ schoolName: 'Brest' });
}

async function getSchoolByName(name) {
    const schoolRepository = await getSchoolRepository();  
    return schoolRepository.findOneBy({ schoolName: name });
}

module.exports = {
    initializeSchools, 
    getSchoolByName, 
};