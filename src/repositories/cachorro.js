const Cachorro = require("../models/cachorro")

class RepositorioCachorro {

    async GetCachorro(idCachorro) {
        return Cachorro.findOne({
            where: { idCachorro }
        })
    }

    async GetCachorros() {
        return Cachorro.findAll()
    }

    async AddCachorro(nome, dono) {
        return Cachorro.create({
            nome: nome,
            dono: dono
        })
    }

    async UpdateCachorro(idCachorro, nome, dono) {
        return Cachorro.update({
            nome: nome,
            dono: dono
        },{
            where: { idCachorro }
        })
    }

    async DeleteCachorro(idCachorro) {
        return Cachorro.destroy({
            where: { idCachorro }
        })
    }
}

module.exports = RepositorioCachorro