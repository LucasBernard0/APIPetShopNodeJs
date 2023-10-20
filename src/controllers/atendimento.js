const ServiceAtendimento = require("../services/atendimento");

const service = new ServiceAtendimento();

class ControllerAtendimento {

    async GetAtendimento(req, res) {
        try {
            const result = await service.GetAtendimentos(req.params.id);
            res.status(200).json({
                atendimento: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao pegar atendimento" })
        }
    }

    async GetAtendimentos(_, res) {
        try {
            const result = await service.GetAtendimentos();
            res.status(200).json({
                atendimentos: result
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao listar atendimento" })
        }
    }

    async AddAtendimento(req, res) {
        try {
            service.AddAtendimento(req.body.diaehora, req.body.valor, req.body.idCachorro, req.body.conclusao);
            res.status(201).json({
                message: "Adicionado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao adicionar atendimento" })
        }
    }

    async UpdateAtendimento(req, res) {
        try {
            service.UpdateAtendimento(
                req.params.id,
                req.body.diaehora,
                req.body.valor,
                req.body.conclusao,
              );
        
              res.status(200).json({
                message: "Alterado com sucesso",
              });
            } catch (error) {
              res.status(500).json({ message: "Erro ao alterar atendimento" });
            }
    }

    async DeleteAtendimento(req, res) {
        try {
            service.DeleteAtendimento(req.params.id);
            res.status(200).json({
                message: "Atendimento deletado com sucesso"
            });
        }catch(error){
            res.status(500).json({ message: "Erro ao deletar atendimento" })
        }
    }
}

module.exports = ControllerAtendimento;