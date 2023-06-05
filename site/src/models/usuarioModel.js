var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, sobrenome , nickname, email, senha, personagem) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, sobrenome, nickname, email, senha, personagem);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, nickname, email, senha, personagem) VALUES ('${nome}', '${sobrenome}', '${nickname}', '${email}', '${senha}', '${personagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliar(estrelas, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", estrelas);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO avaliacao (qtd_estrelas, fkUsuario) VALUES ('${estrelas}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_email(email) {
    var instrucao = `SELECT * FROM usuario WHERE email = '${email}'`;
    console.log("Executando verificação de e-mail: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_avaliacao(fkUsuario) {
    var instrucao = `SELECT * FROM avaliacao as avaliacao WHERE fkUsuario = '${fkUsuario}'`;
    console.log("Executando verificação de qtd_estrelas: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_nickname(nickname) {
    var instrucao = `SELECT * FROM usuario WHERE nickname = '${nickname}'`;
    console.log("Executando verificação de e-mail: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pontos(pontosCertos, pontosErrados, tema, fkUsuario) {
    var instrucao = `INSERT INTO quiz (tema, pontosCertos, pontosErrados, fkUsuario) VALUES ('${tema}', '${pontosCertos}', '${pontosErrados}', '${fkUsuario}');`;
    console.log("Executando verificação de e-mail: \n" + instrucao);
    return database.executar(instrucao);
}

function verificar_personagens() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT personagem FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingGeral() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'geral'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingJake() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'jake'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingHolt() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'holt'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingAmy() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'amy'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingTerry() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'terry'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingRosa() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'rosa'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingBoyle() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'boyle'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_rankingGina() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'gina'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilGeral() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'geral'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilJake() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'jake'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilHolt() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'holt'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilAmy() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'amy'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilTerry(fkUsuarioGeral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'terry'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilRosa(fkUsuarioGeral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'rosa'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilBoyle(fkUsuarioGeral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'boyle'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar_perfilGina(fkUsuarioGeral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT usuario.nickname as nickname, 
    quiz.pontosCertos AS pontos,
    quiz.tema,
    fkUsuario  FROM quiz JOIN usuario 
    ON fkUsuario = idUsuario
    WHERE tema = 'gina'
	ORDER BY pontos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoPersonagem() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT personagem FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function graficoHallowen() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT hallowen FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function episodio_hallowen(fkUsuarioGeral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT hallowen FROM usuario
    WHERE idUsuario = '${fkUsuarioGeral}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updatePersonagem(selectedPersonagem, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    UPDATE usuario SET personagem = '${selectedPersonagem}'
    WHERE idUsuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updateHallowen(selectedHallowen, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    UPDATE usuario SET hallowen = '${selectedHallowen}'
    WHERE idUsuario = '${fkUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    entrar,
    cadastrar,
    listar,
    atualizar_rankingGeral,
    atualizar_rankingJake,
    atualizar_rankingHolt,
    atualizar_rankingAmy,
    atualizar_rankingTerry,
    atualizar_rankingRosa,
    atualizar_rankingBoyle,
    atualizar_rankingGina,
    atualizar_perfilAmy,
    atualizar_perfilJake,
    atualizar_perfilHolt,
    atualizar_perfilGeral,
    atualizar_perfilTerry,
    atualizar_perfilRosa,
    atualizar_perfilBoyle,
    atualizar_perfilGina,
    episodio_hallowen,
    graficoPersonagem,
    graficoHallowen,
    updatePersonagem,
    updateHallowen,
    verificar_email,
    verificar_avaliacao,
    verificar_nickname,
    verificar_personagens,
    cadastrar_pontos,
    avaliar
};