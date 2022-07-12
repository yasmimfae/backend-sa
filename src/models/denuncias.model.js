module.exports = (sequelize, Sequelize) => {
    const Denuncia = sequelize.define('denúncia',{
        id:{
             type: Sequelize.INTEGER,
             primaryKey: true,
             autoIncrement: true,
        },
        
        descricao:{
            type: Sequelize.STRING,
            notNull: true,
            varchar: 500
        },
    
    },
    {
        timestamps:false,
    }
    )
    return Denuncia
}