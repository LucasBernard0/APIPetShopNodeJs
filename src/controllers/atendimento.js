const ServiceAtendimento = require("../services/atendimento");

const servico = new ServiceAtendimento();

class ControllerAtendimento {

    async GetAtendimento(req, res) {
        try {
            const result = await servico.GetAtendimentos(req.params.id);
            res.status(200).json({
                atendimento: result
            });
        }catch(error){
            res.status(500).json({
                message: error
            })
        }
    }

    async GetAtendimentos(_, res) {
        try {
            const result = await servico.GetAtendimentos();
            res.status(200).json({
                atendimentos: result
            });
        }catch(error){
            res.status(500).json({
                message: error
            })
        }
    }

    async AddAtendimento(req, res) {
        try {
            servico.AddAtendimento(req.body.diaehora, req.body.valor, req.body.idCachorro, req.body.conclusao);
            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            res.status(500).json({
                message: error
            })
        }
    }

    async UpdateAtendimento(req, res) {
        try {
            servico.UpdateAtendimento(req.params.id, req.body.conclusao);
            res.status(200).json({
                message: "Atendimento alterado com sucesso"
            });
        }catch(error){
            res.status(500).json({
                message: error
            })
        }
    }

    async DeleteAtendimento(req, res) {
        try {
            servico.DeleteAtendimento(req.params.id);
            res.status(200).json({
                message: "Atendimento deletado com sucesso"
            });
        }catch(error){
            res.status(500).json({
                message: error
            })
        }
    }
}

module.exports = ControllerAtendimento;