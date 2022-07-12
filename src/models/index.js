const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        port: dbConfig.PORT,
        dialect: dbConfig.DIALECT,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('../models/user.model')(db.sequelize, db.Sequelize)
db.user.sync()
db.animal = require('../models/animal.model')(db.sequelize, db.Sequelize)
db.animal.sync()
db.denuncias = require('../models/denuncias.model')(db.sequelize, db.Sequelize)
db.denuncias.sync()
// db.adocao = require('../models/adocao.model')(db.sequelize, db.Sequelize)
// db.adocao.sync()


const run = async() =>{
}

db.sequelize.sync({force: true}).then(() => {
    console.log("Updating");
    run()
})

// db.user.hasMany(db.animal, { as: "animal",
//     foreignKey: 'idanimal'
// });
// animal.belongsTo(db.user)

// db.user.hasMany(db.denuncias, { as: "denuncias",
//     foreignKey: 'iddenuncias'
// });
// denuncias.belongsTo(db.denuncias)

// db.user.hasMany(db.adocao, { as: "adocao",
//     foreignKey: 'idadocao'
// });
// adocao.belongsTo(db.user)

// user.hasOne(adocao, {
//     foreignKey: 'idadocao',
//     as: 'adocao'
// });
// adocao.belongsTo(user)



module.exports = db

// db.ong.hasMany(db.post, { as: "post"})
// db.post.belongsTo(db.ong, {
//     foreignKey: "ongId",
//     as: "ong"
// })