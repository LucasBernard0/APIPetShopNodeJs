const RepositorioCachorro = require("../repositories/cachorro")
const repositorio = new RepositorioCachorro()

class ServiceCachorro {

    async GetCachorro(id) {
        if(isNaN(id)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.GetCachorro(id)
    }

    async GetCachorros() {
        return repositorio.GetCachorros()
    }

    async AddCachorro(nome, dono) {
        return repositorio.AddCachorro(nome, dono)
    }

    async UpdateCachorro(id, nome, dono) {
        if(isNaN(id)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateCachorro(id,nome,dono)
    }

    async DeleteCachorro(id) {
        if(isNaN(id)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteCachorro(id)
    }
}

module.exports = ServiceCachorro