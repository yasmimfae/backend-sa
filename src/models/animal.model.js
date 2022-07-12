module.exports = (sequelize, Sequelize) =>{
    const Animal = sequelize.define('animal', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
        },
        nome: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            varchar: 100
            
        },
        nascimento: {
            type: Sequelize.DATE,
            notNull: true
        },
        descricao: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-z0-9\._]{4, 32}$/,
            varchar: 500
        },

        raca:{
            type: Sequelize.STRING,
            notNull: true,
            varchar: 100
        },
    },
    {
        timestamps: false,
    }
    
    )
    return Animal
}