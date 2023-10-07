const RepositorioAtendimento = require("../repositories/atendimento");

const repositorio = new RepositorioAtendimento;

class ServiceAtendimento {
    
    async GetAtendimento(idAtendimentos) {
        return repositorio.GetAtendimentos(idAtendimentos);
    }

    async GetAtendimentos() {
        return repositorio.GetAtendimentos();
    }

    async AddAtendimento(diaehora, valor, idCachorro, conclusao) {
        if(diaehora == "" || !valor || isNaN(idCachorro || conclusao == "")) {
            throw new Error("Favor preencher todos os dados");
        }
        repositorio.AddAtendimento(diaehora, valor, idCachorro, conclusao);
    }

    async UpdateAtendimento(idAtendimentos, conclusao) {
        if(conclusao == "") {
            throw new Error("Favor preencher todos os dados");
        }else if(idAtendimentos < 0 || isNaN(idAtendimentos)) {
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.UpdateAtendimento(idAtendimentos, conclusao);
    }

    async DeleteAtendimento(idAtendimentos) {
        if(idAtendimentos < 0 || isNaN(idAtendimentos)) {
            throw new Error("Favor preencher corretamente o id");
        }
        repositorio.DeleteAtendimento(idAtendimentos);
    }
}

module.exports = ServiceAtendimento;