const RepositorioUsuario = require("../repositories/usuario");
const usuario = new RepositorioUsuario();

class ServiceUsuario{

    async GetUsuario(idUsuario, transaction){
        if(isNaN(idUsuario)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.GetUsuario(idUsuario, transaction);
    }

    async GetUsuarioPorEmail(email){
        if(!email){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.GetUsuarioPorEmail(email);
    }

    async GetUsuarios(){
        return usuario.GetUsuarios()
    }

    async AddUsuario(email, senha){
        return usuario.AddUsuario(email, senha)
    }

    async UpdateUsuario(id, email, senha){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.UpdateUsuario(id, email, senha);
    }

    async DeleteUsuario(id){
        if(isNaN(id)){
            throw new Error("Parâmetro Inválido!");
        }
        return usuario.DeleteUsuario(id);
    }
}

module.exports = ServiceUsuario