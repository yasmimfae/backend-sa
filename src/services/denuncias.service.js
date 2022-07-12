const db = require('../models')
const Denuncias = db.denuncias

exports.findAll = async () => {
    try{
        const denuncias = await Denuncias.findAll({
            attributes:['id','descricao']
        })
        return denuncias
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar a denuncia. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        const Denuncias = await Denuncias.findByPk(id, {
            attributes:['id','descricao']
        })
        return Denuncias 
    } catch (e) {
        throw Error('ocorreu um erro ao selecionar a denuncia. ERROR: ' + e.message)
    }
}

exports.create = async(idusuario, descricao) => {
    try{

        const Denuncias = await Denuncias.create({idusuario:idusuario, descricao:descricao})
        return Denuncias
    } catch (e) {
        throw Error('Erro ao inserir a denuncia: ' + descricao + ' ERROR: ' + e.message)
    }
}

// exports.Denuncias = async() => {
//     try{

//         const Denuncias = await Denuncias.findAll({descricao: descricao})
//         return Denuncias
//     } catch (e) {
//         throw Error('Erro ao inserir o usuario: ' + Denuncias + ' ERROR: ' + e.message)
//     }
// }


exports.update = async (idusuario, descricao) => {
    try {
        await Denuncias.update(
            {idusuario: idusuario, descricao: descricao},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o denuncia: ' + Denunciasname + 'ERROR: ' + e.message)
    }
}



exports.delete = async (id) => {
    try {
        await Denuncias.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o denuncia. ERROR: ' + e.message)
    }
}