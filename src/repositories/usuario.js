const Usuario = require("../models/usuario")
const bcrypt = require("bcrypt")

class RepositorioUsuario{

    async GetUsuario(idUsuario, transaction){
        return Usuario.findOne({
            where: { idUsuario },
            transaction
        })
    }

    async GetUsuarioPorEmail(email){
        return Usuario.findOne({
            where: { email }
        })
    }

    async GetUsuarios(){
        return Usuario.findAll()
    }

    async AddUsuario(email, senha){
        const hashSenha = await bcrypt.hash(senha, 12)

        const result = await Usuario.create(
            {email, senha: hashSenha}
        )

        return result;
    }

    async UpdateUsuario(id, email, senha){
        return Usuario.update({
            email: email,
            senha: senha
        },{
            where: { idUsuario: id }
        })
    }

    async DeleteUsuario(id){
        return Usuario.destroy({
            where: { idUsuario: id }
        })
    }
}

module.exports = RepositorioUsuario