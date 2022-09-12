const EntitySchema = require('typeorm').EntitySchema; 

module.exports = new EntitySchema({
    name: 'Student', 
    columns: {
        id:{
            primary: true, 
            type: 'uuid', 
            generated: 'uuid',
        }, 
        name:{
            type:'text', 
        },
    },
});