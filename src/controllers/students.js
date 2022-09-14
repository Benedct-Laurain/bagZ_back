const { getStudents, createStudent, updateStudent, deleteStudent, addHumanToStudent } = require('../models/Student/manager')

const get = async (req, res) => {
    const students = await getStudents(); 
    res.json(students); 
}; 

const post = async (req, res) => {
    const { firstName, lastName } = req.body; 
    if (!firstName || !lastName) {
        res.status(400).json({ error: 'First name and last name requiered'})
    } else {
        const newStudent = await createStudent(firstName, lastName); 
        res.status(201).json(newStudent); 
    }
}; 

const put = async (req, res) => { 
    const { id } = req.params; 
    const { firstName, lastName } = req.body; 

    if (!firstName || !lastName) {
        res.status(400).json({ error: 'First name and last name requiered'});
    } else {
        try {
            const update = await updateStudent(id, firstName, lastName);
            res.json(update); 
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}; 

const del = async (req, res) => { 
    const { id } = req.params; 

    try {
        await deleteStudent(id);
        res.json({ message: `Student ${id} has been successfully removed.`});
    } catch (error) {
        res.status(404).json({ error: error.message }); 
    }  
};

const addHuman = async (req, res) => {
    const { id: studentId } = req.params; 
    const { humanId } = req.body; 

    if (!humanId) {
        res.statut(400).json({ error: 'Skill ID is mandatory' }); 
    } else {
        try {
            const updateStudent = await addHumanToStudent(studentId, humanId); 
            res.json(updateStudent); 
        } catch (error) {
            res.status(404).json({ error: error.message }); 
        }
    }
}

module.exports = {
    get,
    post, 
    put, 
    del, 
    addHuman, 
}