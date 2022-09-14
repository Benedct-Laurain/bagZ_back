const { getHumanRepository } = require('../../database/utils'); 

const initializeHumans = async () => {
    const humanRepository = await getHumanRepository(); 
    await humanRepository.clear(); 
    await humanRepository.save({ firstName: 'First', lastName: 'Human' }); 
    await humanRepository.save({ firstName: 'Second', lastName: 'Human' }); 
}; 

module.exports = { initializeHumans }; 