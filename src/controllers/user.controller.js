const userService = require('../services/user.service')

exports.findAll = async (request, response) => {
    try {
        const user = await userService.findAll()
        return response.status(200).json({
            status: 200,
            data: user,
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
        const user = await userService.findById(id)
        
        response.status(200).json({
            status:200,
            data: user,
            message: 'Usuario selecionado com sucesso!'
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
        const { username, email, password } = request.body
        const user = await userService.create(username, email, password)
        response.status(201).send({
            message: "Usuario cadastrado com sucesso!",
            body: {
                user: user
            }
        })
    } catch (e) {
        return reponse.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o usuario. ERROR: " + e.message
        })
    }
}

// exports.username= async (request, response) => {
//     try {
//         const { username, password } = request.body
//         const user = await userService.create(username,  password)
//         response.status(201).send({
//             message: "Usuario cadastrado com sucesso!",
//             body: {
//                 user: user
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
        const {username, email, password} = request.body
        await userService.update(id, username, email, password)
        response.status(200).send({
            message: "Usuario alterado com sucesso!",
            body:{
                username: username,
                email: email
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
        await userService.delete(id)
        reponse.status(200).send({message: "Usuario deletado"})
    } catch(e){
        return reponse.status(400).json({
            status: 400,
            message: e.message
        })
    }
}