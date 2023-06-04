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

router.get("/verificar_avaliacao/:fkUsuario", function (req, res) {
    usuarioController.verificar_avaliacao(req, res);
});

router.get("/verificar_personagens", function (req, res) {
    usuarioController.verificar_personagens(req, res);
});

router.get("/atualizar_rankingGeral", function (req, res) {
    usuarioController.atualizar_rankingGeral(req, res);
});

router.get("/atualizar_rankingJake", function (req, res) {
    usuarioController.atualizar_rankingJake(req, res);
});

router.get("/atualizar_rankingHolt", function (req, res) {
    usuarioController.atualizar_rankingHolt(req, res);
});

router.get("/atualizar_rankingAmy", function (req, res) {
    usuarioController.atualizar_rankingAmy(req, res);
});

router.get("/atualizar_rankingTerry", function (req, res) {
    usuarioController.atualizar_rankingTerry(req, res);
});

router.get("/atualizar_rankingRosa", function (req, res) {
    usuarioController.atualizar_rankingRosa(req, res);
});

router.get("/atualizar_rankingBoyle", function (req, res) {
    usuarioController.atualizar_rankingBoyle(req, res);
});

router.get("/atualizar_rankingGina", function (req, res) {
    usuarioController.atualizar_rankingGina(req, res);
});

module.exports = router;