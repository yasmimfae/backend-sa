const denunciasService = require('../services/denuncias.service')

exports.findAll = async (request, response) => {
    try {
        const denuncias = await denunciasService.findAll()
        return response.status(200).json({
            status: 200,
            data: denuncias,
            message: 'Denuncias listadas com sucesso'
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
        const denuncias = await denunciasService.findById(id)
        
        response.status(200).json({
            status:200,
            data: denuncias,
            message: 'Denuncia selecionado com sucesso!'
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
        const {idusuario, descricao } = request.body
        const denuncias = await denunciasService.create(idusuario, descricao)
        response.status(201).send({
            message: "Denuncia cadastrado com sucesso!",
            body: {
                denuncias: denuncias
            }
        })
    } catch (e) {
        return reponse.status(400).json({
            status: 400,
            message: "Erro ao cadastrar a Denuncia. ERROR: " + e.message
        })
    }
}

// exports.denunciasname= async (request, response) => {
//     try {
//         const { denunciasname, password } = request.body
//         const denuncias = await denunciasService.create(denunciasname,  password)
//         response.status(201).send({
//             message: "Usuario cadastrado com sucesso!",
//             body: {
//                 denuncias: denuncias
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
        const {idusuario, descricao} = request.body
        await denunciasService.update(id, idusuario, descricao)
        response.status(200).send({
            message: "Denuncia alterado com sucesso!",
            body:{
                idusuario: idusuario,
                descricao: descricao
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
        await denunciasService.delete(id)
        reponse.status(200).send({message: "Denuncia deletada"})
    } catch(e){
        return reponse.status(400).json({
            status: 400,
            message: e.message
        })
    }
}