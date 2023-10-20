const Atendimento = require("../models/atendimento");
const Cachorro = require("../models/cachorro.js");

class RepositorioAtendimento {
    async GetAtendimento(idAtendimentos) {
        return Atendimento.findOne({
            where: { idAtendimentos },
            include: [ Cachorro ]
        });
    }

    async GetAtendimentos() {
        return Atendimento.findAll();
    }

    async AddAtendimento(diaehora, valor, idCachorro, conclusao) {
        return Atendimento.create({
            diaehora,
            valor,
            idCachorro,
            conclusao
        });
    }

    async UpdateAtendimento(idAtendimentos, conclusao) {
        return Atendimento.UpdateAtendimento({
            conclusao
        }, {
            where: { idAtendimentos }
        });
    }

    async DeleteAtendimento(idAtendimentos) {
        return Atendimento.destroy({
            where: { idAtendimentos }
        });
    }
}

module.exports = RepositorioAtendimento;