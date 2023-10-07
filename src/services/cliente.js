const RepositorioCliente = require("../repositories/cliente")
const repositorio = new RepositorioCliente()

class ServiceCliente {

    async GetCliente(idCliente) {
        if(isNaN(idCliente)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.GetCliente(id)
    }

    async GetClientes() {
        return repositorio.GetClientes()
    }

    async AddCliente(nome, telefone) {
        return repositorio.AddCliente(nome, telefone)
    }

    async UpdateCliente(idCliente, nome, telefone) {
        if(isNaN(idCliente)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateCliente(id, nome, telefone)
    }

    async DeleteCliente(idCliente) {
        if(isNaN(idCliente)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteCliente(idCliente)
    }
}

module.exports = ServiceCliente