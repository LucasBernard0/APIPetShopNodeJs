const ServiceCliente = require("../services/cliente");
const service = new ServiceCliente();

class ControllerCliente {
  async GetCliente(req, res) {
    try {
      const resultado = await service.GetCliente(req.params.id);
      res.status(200).json({
        nome: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao pegar um nome" });
    }
  }

  async GetClientes(_, res) {
    try {
      const resultado = await service.GetClientes();
      res.status(200).json({
        nomes: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao listar nomes" });
    }
  }

  async AddCliente(req, res) {
    try {
      const resultado = await service.AddCliente(
        req.body.nome,
        req.body.telefone
      );
      res.status(200).json({
        message: "Adicionado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error });
    }
  }

  async UpdateCliente(req, res) {
    try {
      service.UpdateCliente(req.params.id, req.body.nome, req.body.telefone);

      res.status(200).json({
        message: "Alterado com sucesso",
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar" });
    }
  }

  async DeleteCliente(req, res) {
    try {
      const resultado = await service.DeleteCliente(req.params.id);
      res.status(200).json({
        message: "Deletado com sucesso",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Erro ao deletar" });
    }
  }

  async GetCachorrosCliente(req, res) {
    try {
      const resultado = await service.GetCachorrosCliente(
        req.params.idCliente
      );
      res.status(200).json({
        cachorros: resultado,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: error,
      });
    }
  }
}

module.exports = ControllerCliente;
