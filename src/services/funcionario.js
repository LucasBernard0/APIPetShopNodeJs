const RepositorieFuncionario = require("../repositories/funcionario");
const funcionario = new RepositorieFuncionario();

class ServiceFuncionario {
  async GetFuncionario(idUsuario, transaction) {
    if (isNaN(idUsuario)) {
      throw new Error("Parâmetro Inválido!");
    }
    return funcionario.GetFuncionario(idUsuario, transaction);
  }

  async GetFuncionarioPorEmail(email) {
    if (!email) {
      throw new Error("Parâmetro Inválido!");
    }
    return funcionario.GetFuncionarioPorEmail(email);
  }

  async GetFuncionarios() {
    return funcionario.GetFuncionarios();
  }

  async AddFuncionario(email, senha) {
    return funcionario.AddFuncionario(email, senha);
  }

  async UpdateFuncionario(id, email, senha) {
    if (isNaN(id)) {
      throw new Error("Parâmetro Inválido!");
    }
    return funcionario.UpdateFuncionario(id, email, senha);
  }

  async DeleteFuncionario(id) {
    if (isNaN(id)) {
      throw new Error("Parâmetro Inválido!");
    }
    return funcionario.DeleteFuncionario(id);
  }
}

module.exports = ServiceFuncionario;
