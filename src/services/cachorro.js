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

    async AddCachorro(nome, dono) {
        return repositorio.AddCachorro(nome, dono)
    }

    async UpdateCachorro(idCachorro, nome, dono) {
        if(isNaN(idCachorro)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateCachorro(idCachorro, nome, dono)
    }

    async DeleteCachorro(idCachorro) {
        if(isNaN(idCachorro)) {
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteCachorro(idCachorro)
    }
}

module.exports = ServiceCachorro