const animalService = require('../services/animal.service')

exports.findAll = async (request, response) => {
    try {
        const animals = await animalService.findAll()
        return response.status(200).json({
            status: 200,
            data: animals,
            message: 'Usuarios listados com sucesso'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.findById = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const animal = await animalService.findById(id)
        
        response.status(200).json({
            status:200,
            data: animal,
            message: 'animal selecionado com sucesso!'
        })
    } catch (e) {
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}

exports.create = async (request, response) => {
    try {
        const { nome, dataNasc, descricao, raca } = request.body
        const animal = await animalService.create(nome, dataNasc, descricao, raca)
        response.status(201).send({
            message: "Animal cadastrado com sucesso!",
            body: {
                animal: animal
            }
        })
    } catch (e) {
        return reponse.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o animal. ERROR: " + e.message
        })
    }
}

// exports.animalname= async (request, response) => {
//     try {
//         const { animalname, password } = request.body
//         const animal = await animalService.create(animalname,  password)
//         response.status(201).send({
//             message: "Usuario cadastrado com sucesso!",
//             body: {
//                 animal: animal
//             }                                                                               
//         })
//     } catch (e) {
//         return reponse.status(400).json({
//             status: 400,
//             message: "Erro ao cadastrar o usuario. ERROR: " + e.message
//         })
//     }
// }




exports.update = async(request, response) => {
    try {
        const id = parseInt(request.params.id)
        const { nome, dataNasc, descricao, raca } = request.body
        await animalService.update(id,  nome, dataNasc, descricao, raca )
        response.status(200).send({
            message: "Usuario alterado com sucesso!",
            body:{
                nome: nome,
                dataNasc: dataNasc,
                descricao: descricao,
                raca: raca
            }
        })
    } catch(e){
        return reponse.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.delete = async(request, reponse) => {
    try{
        const id = parseInt(request.params.id)
        await animalService.delete(id)
        reponse.status(200).send({message: "Animal deletado"})
    } catch(e){
        return reponse.status(400).json({
            status: 400,
            message: e.message
        })
    }
}