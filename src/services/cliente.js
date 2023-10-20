const Cliente = require("../models/cliente")
const RepositorioCliente = require("../repositories/cliente")
const repositorio = new RepositorioCliente()

class ServiceCliente {

    async GetCliente(idCliente, transaction) {
        if(isNaN(idCliente)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.GetCliente(idCliente, transaction)
    }

    async GetClientes() {
        return repositorio.GetClientes()
    }

    async AddCliente(nome, telefone) {
        return repositorio.AddCliente(nome, telefone)
    }

    async UpdateCliente(id, nome, telefone) {
        if(isNaN(id)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateCliente(id, nome, telefone)
    }

    async DeleteCliente(id) {
        if(isNaN(id)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteCliente(id)
    }

    async GetCachorrosCliente(idCliente){
        if(isNaN(idCliente)){
            throw new Error("Parâmetro Inválido!")
        }
        return Cliente.GetCachorrosCliente(idCliente)
    }
}

module.exports = ServiceCliente