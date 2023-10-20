const Cachorro = require("../models/cachorro")
const Atendimento = require("../models/atendimento")

class RepositorioCachorro {

    async GetCachorro(id) {
        return Cachorro.findOne({
            where: { id },
            include: [ Atendimento ]
        })
    }

    async GetCachorros() {
        return Cachorro.findAll()
    }

    async AddCachorro(nome, dono) {
        return Cachorro.create({
            nome,
            dono
        })
    }

    async UpdateCachorro(id, nome) {
        return Cachorro.update({
            nome
        },{
            where: { id }
        })
    }

    async DeleteCachorro(id) {
        return Cachorro.destroy({
            where: { id }
        })
    }
}

module.exports = RepositorioCachorro