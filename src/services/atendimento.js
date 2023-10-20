const RepositorioAtendimento = require("../repositories/atendimento");

const repositorio = new RepositorioAtendimento;

class ServiceAtendimento {
    
    async GetAtendimento(idAtendimentos) {
        if(isNaN(idAtendimentos)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.GetAtendimento(idAtendimentos)
    }
    async GetAtendimentos() {
        return repositorio.GetAtendimentos();
    }

    async AddAtendimento(diaehora, valor, idCachorro, conclusao) {
        return repositorio.AddAtendimento(diaehora, valor, idCachorro, conclusao)
    }

    async UpdateAtendimento(idAtendimentos, dataehora, conclusao, idCachorro) {
        if(isNaN(idAtendimentos)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.UpdateAtendimento(idAtendimentos, dataehora, conclusao, idCachorro)
    }

    async DeleteAtendimento(idAtendimentos) {
        if(isNaN(idAtendimentos)){
            throw new Error("Parâmetro Inválido!")
        }
        return repositorio.DeleteAtendimento(idAtendimentos)
    }
}

module.exports = ServiceAtendimento;