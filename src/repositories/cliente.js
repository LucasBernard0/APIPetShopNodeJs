const Cliente = require("../models/cliente")

class RepositorioCliente {

    async GetCliente(idCliente) {
        return Cliente.findOne({
            where: { idCliente }
        })
    }

    async GetClientes(){
        return Cliente.findAll()
    }

    async AddCliente(nome, telefone) {
        return Cliente.create({
            nome: nome,
            telefone: telefone
        })
    }

    async UpdateCliente(idCliente, nome, telefone) {
        return Cliente.update({
            nome: nome,
            telefone: telefone
        },{
            where: { idCliente }
        })
    }

    async DeleteCliente(idCliente) {
        return Cliente.destroy({
            where: { idCliente }
        })
    }
}

module.exports = RepositorioCliente