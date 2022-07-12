const db = require('../models')
const Animal = db.animal

exports.findAll = async () => {
    try{
        const animal = await Animal.findAll({
            attributes:['id', 'nome', 'dataNasc', 'descricao', 'raca']
        })
        return animal
    } catch(e){
        throw Error('Ocorreu um erro ao selecionar os animal. ERROR: ' + e.message)
    }
}

exports.findById = async(id) => {
    try{
        const Animal = await Animal.findByPk(id, {
            attributes:['id',  'nome', 'dataNasc', 'descricao', 'raca']
        })
        return Animal 
    } catch (e) {
        throw Error('ocorreu um erro ao selecionar o animal. ERROR: ' + e.message)
    }
}

exports.create = async(nome, dataNasc, descricao, raca) => {
    try{

        const Animal = await Animal.create({nome: nome, dataNasc: dataNasc, descricao: descricao, raca: raca})
        return Animal
    } catch (e) {
        throw Error('Erro ao inserir o animal: ' + nome + ' ERROR: ' + e.message)
    }
}

// exports.Animalname = async(nome, dataNasc, descricao, raca) => {
//     try{

//         const Animal = await Animal.findAll({nome: nome, dataNasc: dataNasc, descricao: descricao, raca: raca})
//         return Animal
//     } catch (e) {
//         throw Error('Erro ao inserir o nome: ' + nome + ' ERROR: ' + e.message)
//     }
// }


exports.update = async (id, nome, dataNasc, descricao, raca) => {
    try {
        await Animal.update(
            {nome: nome, descricao: descricao, dataNasc: dataNasc, raca: raca},
            {where:{id: id}})
    } catch (e) {
        throw Error('Erro ao alterar o nome: ' + Animalname + 'ERROR: ' + e.message)
    }
}



exports.delete = async (id) => {
    try {
        await Animal.destroy({
            where:{id: id}
        })
    } catch (e) {
        throw Error('Ocorreu um erro ao deletar o nome. ERROR: ' + e.message)
    }
}