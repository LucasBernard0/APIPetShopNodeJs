const Usuario = require('../models/usuario')
const bcrypt = require('bcrypt')

class RepositorioUsuario{

    async GetUsuario(usuario_id, transaction){
        return Usuario.findOne({
            where: { usuario_id },
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
            where: { usuario_id: id }
        })
    }

    async DeleteUsuario(id){
        return Usuario.destroy({
            where: { usuario_id: id }
        })
    }
}

module.exports = RepositorioUsuario