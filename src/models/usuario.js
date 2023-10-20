const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Cliente = require("./cliente")

const Usuario = sequelize.define("usuarios", {
    usuario_id: {
        field: "idUsuario",
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },

    nivel_permissao: {
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,
    updatedAt: false
})

Usuario.hasOne(Cliente, { foreignKey: 'idUsuario' })
module.exports = Usuario;