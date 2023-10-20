const RepositorioCachorro = require("../repositories/cachorro")
const repositorio = new RepositorioCachorro()

class ServiceCachorro {

    async GetCachorro(idCachorro) {
        if(isNaN(idCachorro)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.GetCachorro(id)
    }

    async GetCachorros() {
        return repositorio.GetCachorros()
    }

    async AddCachorro(nome, idCliente) {
        return repositorio.AddCachorro(nome, idCliente)
    }

    async UpdateCachorro(idCachorro, nome, idCliente) {
        if(isNaN(idCachorro)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateCachorro(idCachorro, nome, idCliente)
    }

    async DeleteCachorro(idCachorro) {
        if(isNaN(idCachorro)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteCachorro(idCachorro)
    }
}

module.exports = ServiceCachorro