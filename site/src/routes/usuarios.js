var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/avaliar", function (req, res) {
    usuarioController.avaliar(req, res);
});

router.post("/verificar_email", function (req, res) {
    usuarioController.verificar_email(req, res);
});

router.post("/verificar_nickname", function (req, res) {
    usuarioController.verificar_nickname(req, res);
});

router.post("/cadastrar_pontos", function (req, res) {
    usuarioController.cadastrar_pontos(req, res);
});


module.exports = router;