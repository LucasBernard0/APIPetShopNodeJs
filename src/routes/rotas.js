const express = require('express')
const ControllerLogin = require('../controllers/login')
const ControllerFuncionario = require('../controllers/funcionario')
const ControllerCliente = require('../controllers/cliente')
const ControllerCachorro = require('../controllers/cachorro')
const ControllerAtendimento = require('../controllers/atendimento')
const authMiddleware = require('../middleware/auth')

const controllerlogin = new ControllerLogin()
const controllerfuncionario = new ControllerFuncionario()
const controllercliente = new ControllerCliente()
const controllercachorro = new ControllerCachorro()
const controlleratendimento = new ControllerAtendimento()
const router = express.Router()


router.post('/api/login', controllerlogin.Logar)

//Funcionários

router.get('/api/getfuncionario/:idUsuario', authMiddleware, controllerfuncionario.GetFuncionario)
router.get('/api/getfuncionarios', authMiddleware, controllerfuncionario.GetFuncionarios)
router.post('/api/addfuncionario', authMiddleware, controllerfuncionario.AddFuncionario)
router.put('/api/updatefuncionario/:id', authMiddleware, controllerfuncionario.UpdateFuncionario)
router.delete('/api/deletefuncionario/:id', authMiddleware, controllerfuncionario.DeleteFuncionario)

// Clientes

router.get('/api/getcliente/:idCliente', authMiddleware, controllercliente.GetCliente)
router.post('/api/addcliente', authMiddleware, controllercliente.AddCliente)
router.get('/api/getclientes', authMiddleware, controllercliente.GetClientes)
router.put('/api/updatecliente/:id', authMiddleware, controllercliente.UpdateCliente)
router.delete('/api/deletecliente/:id', authMiddleware, controllercliente.DeleteCliente)
router.get('/api/getcachorroscliente/:idCliente', authMiddleware, controllercliente.GetCachorrosCliente)

// Cachorros

router.get('/api/getcachorro/:idCachorro', authMiddleware, controllercachorro.GetCachorro)
router.get('/api/getcachorros', authMiddleware, controllercachorro.GetCachorros)
router.post('/api/addcachorro', authMiddleware, controllercachorro.AddCachorro)
router.put('/api/updatecachorro/:idCachorro', authMiddleware, controllercachorro.UpdateCachorro)
router.delete('/api/deletecachorro/:idCachorro', authMiddleware, controllercachorro.DeleteCachorro)

// Atendimentos

router.get('/api/getatendimento/:idAtendimento', authMiddleware, controlleratendimento.GetAtendimento)
router.get('/api/getatendimentos', authMiddleware, controlleratendimento.GetAtendimentos)
router.post('/api/addatendimento', authMiddleware, controlleratendimento.AddAtendimento)
router.put('/api/updateatendimento/:idAtendimento', authMiddleware, controlleratendimento.UpdateAtendimento)
router.delete('/api/deleteatendimento/:idAtendimento', authMiddleware, controlleratendimento.DeleteAtendimento)

module.exports = router